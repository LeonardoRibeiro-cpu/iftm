document.addEventListener("DOMContentLoaded", () => {

    const formularioBusca = document.getElementById("formulario-busca");
    const campoBusca = document.getElementById("campo-busca");
    const btnResetar = document.getElementById("btn-resetar");
    const dicaCampo = document.getElementById("dica-campo");
    const msgErro = document.getElementById("msg-erro");
    const painelResultados = document.getElementById("painel-resultados");
    const botoesRadio = document.querySelectorAll('input[name="criterio"]');

    const modalContainer = document.getElementById("modal-container");
    const tituloModal = document.getElementById("titulo-modal");
    const corpoModal = document.getElementById("corpo-modal");
    const rodapeModal = document.getElementById("rodape-modal");
    const btnAjuda = document.getElementById("btn-ajuda");
    const btnFecharModal = document.getElementById("btn-fechar-modal");

    let controladorBusca = null;

    botoesRadio.forEach(radio => {
        radio.addEventListener("change", (e) => {
            limparErro();
            const val = e.target.value;

            if (val === "todos") {
                campoBusca.placeholder = "Digite termos de busca, título ou autor(es), palavras-chave(s)...";
                dicaCampo.innerHTML = "💡 Pesquisa geral em todo o catálogo (aceita um ou mais autores e titulos por vírgula).";
            } else if (val === "autor") {
                campoBusca.placeholder = "Digite o(s) nome(s) do(s) autor(es)... (ex: Machado de Assis)";
                dicaCampo.innerHTML = "💡 Você pode buscar por <strong>um ou mais autores</strong> (separados por vírgula).";
            } else if (val === "titulo") {
                campoBusca.placeholder = "Digite o(s) título(s) da publicação... (ex: Dom Casmurro, Iracema)";
               dicaCampo.innerHTML = "💡 Você pode buscar por <strong>um ou mais títulos</strong> (separados por vírgula).";
            }
        });
    });

    campoBusca.addEventListener("input", () => {
        if (campoBusca.value.trim().length > 0) limparErro();
    });

    btnResetar.addEventListener("click", () => {
        abrirModalConfirmacaoLimpar();
    });

    formularioBusca.addEventListener("submit", (e) => {
        e.preventDefault();
        const termo = campoBusca.value.trim();

        if (!termo) {
            mostrarErro("Por favor, digite algum termo para realizar a busca.");
            campoBusca.focus();
            return;
        }

        limparErro();
        abrirModalConfirmacaoEnvio(termo);
    });

    function abrirModalConfirmacaoLimpar() {
        tituloModal.textContent = "Tem certeza que deseja limpar?";
        corpoModal.innerHTML = "<p>Esta ação apagará o termo digitado, o critério escolhido e os resultados.</p>";

        rodapeModal.innerHTML = `
            <button type="button" id="btn-modal-sim" class="btn-modal-comum">Sim, limpar</button>
            <button type="button" id="btn-modal-nao" class="btn-modal-destaque">Não, manter dados</button>
        `;

        modalContainer.classList.remove("esconde");

        document.getElementById("btn-modal-nao").focus();

        document.getElementById("btn-modal-nao").onclick = () => fecharModal();
        document.getElementById("btn-modal-sim").onclick = () => {
            executarLimpeza();
            fecharModal();
        };
    }

    function abrirModalConfirmacaoEnvio(termo) {
        const criterio = document.querySelector('input[name="criterio"]:checked').value;
        const nomesCriterios = { todos: "Todos os campos", autor: "Autor(es)", titulo: "Título" };

        tituloModal.textContent = "Confirmar Pesquisa";
        corpoModal.innerHTML = `<p>Deseja realizar a busca em <strong>${nomesCriterios[criterio]}</strong> pelo termo: "<strong>${escaparHtml(termo)}</strong>"?</p>`;

        rodapeModal.innerHTML = `
            <button type="button" id="btn-modal-nao" class="btn-modal-comum">Não, revisar</button>
            <button type="button" id="btn-modal-sim" class="btn-modal-destaque">Sim, buscar</button>
        `;

        modalContainer.classList.remove("esconde");

        document.getElementById("btn-modal-sim").focus();

        document.getElementById("btn-modal-nao").onclick = () => fecharModal();
        document.getElementById("btn-modal-sim").onclick = () => {
            executarBusca(termo, criterio, nomesCriterios[criterio]);
            fecharModal();
        };
    }

    btnAjuda.addEventListener("click", () => {
        tituloModal.textContent = "Como realizar pesquisas";
        corpoModal.innerHTML = `
            <p><strong>📖 O que é Acervo?</strong></p>
            <p style="margin-bottom: 12px; font-size: 0.9rem; color: #555;">
                É o conjunto de livros e publicações disponíveis para consulta. Esta pesquisa utiliza o catálogo público da Open Library.
            </p>
            <p><strong>Opções de Busca:</strong></p>
            <ul>
                <li><strong>Todos os campos:</strong> Pesquisa livre por título, autores ou palavras-chave.</li>
                <li><strong>Autor(es):</strong> Busca por autores (aceita múltiplos nomes separados por vírgula).</li>
             <li><strong>Título(s):</strong> Busca focada no nome da obra (aceita múltiplos títulos separados por vírgula).</li>
            </ul>
        `;
        rodapeModal.innerHTML = `<button type="button" id="btn-modal-ok" class="btn-modal-destaque">Entendido</button>`;
        modalContainer.classList.remove("esconde");

        document.getElementById("btn-modal-ok").onclick = () => fecharModal();
    });

    btnFecharModal.addEventListener("click", fecharModal);

    function executarLimpeza() {
        if (controladorBusca) controladorBusca.abort();

        formularioBusca.reset();
        campoBusca.value = "";
        limparErro();
        document.querySelector('input[value="todos"]').checked = true;
        campoBusca.placeholder = "Digite termos de busca, título(s) ou autor(es), palavras-chave(s)...";
        dicaCampo.innerHTML = "💡 Pesquisa geral em todo o catálogo (aceita um ou mais autores por vírgula).";

        painelResultados.innerHTML = `
            <div class="estado-inicial">
                <div class="icone-estado">📚</div>
                <h3>Pronto para pesquisar</h3>
                <p>Informe os dados acima e clique no botão <strong>Buscar no Acervo</strong>.</p>
            </div>
        `;
        campoBusca.focus();
    }



    function montarConsulta(termo, criterio) {
        const partes = termo
            .split(",")
            .map(t => t.trim().replace(/"/g, ""))
            .filter(Boolean);

        if (criterio === "autor") {
            return partes.map(a => `author:("${a}")`).join(" AND ");
        }
        if (criterio === "titulo") {
            return partes.map(t => `title:(${t})`).join(" OR ");
        }
        return partes.join(" ");
    }

    async function executarBusca(termo, criterio, criterioNome) {
        if (controladorBusca) controladorBusca.abort();
        controladorBusca = new AbortController();

        painelResultados.innerHTML = `
            <div class="estado-vazio">
                <div class="icone-estado">⏳</div>
                <h3>Buscando...</h3>
                <p>Consultando o catálogo da Open Library.</p>
            </div>
        `;

        const url = "https://openlibrary.org/search.json?" + new URLSearchParams({
            q: montarConsulta(termo, criterio),
            limit: 20,
            fields: "key,title,author_name,first_publish_year,cover_i,edition_count"
        });

        try {
            const resp = await fetch(url, { signal: controladorBusca.signal });
            if (!resp.ok) throw new Error("HTTP " + resp.status);
            const dados = await resp.json();
            renderizarResultados(dados.docs || [], dados.numFound || 0, termo, criterioNome);
        } catch (erro) {
            if (erro.name === "AbortError") return; 
            console.error(erro);
            painelResultados.innerHTML = `
                <div class="estado-vazio">
                    <div class="icone-estado">⚠️</div>
                    <h3>Não foi possível consultar o acervo</h3>
                    <p>Verifique sua conexão e tente novamente.</p>
                </div>
            `;
        }
    }

    function renderizarResultados(livros, total, termo, criterioNome) {
        if (!livros.length) {
            painelResultados.innerHTML = `
                <div class="estado-vazio">
                    <div class="icone-estado">🔎</div>
                    <h3>Nenhum resultado</h3>
                    <p>Nada encontrado em <strong>${criterioNome}</strong> para "<strong>${escaparHtml(termo)}</strong>".</p>
                </div>
            `;
            return;
        }

        const cards = livros.map(l => {
            const titulo = l.title || "Sem título";
            const autores = l.author_name && l.author_name.length
                ? l.author_name.slice(0, 3).join(", ")
                : "Autor desconhecido";
            const capa = l.cover_i
                ? `<img src="https://covers.openlibrary.org/b/id/${encodeURIComponent(l.cover_i)}-M.jpg" alt="Capa de ${escaparHtml(titulo)}" loading="lazy">`
                : `<div class="sem-capa">📕</div>`;
            const detalhes = [
                l.first_publish_year ? `1ª publicação: ${l.first_publish_year}` : "",
                l.edition_count ? `${l.edition_count} edições` : ""
            ].filter(Boolean).join(" · ");

            return `
                <article class="card-livro">
                    ${capa}
                    <div class="info-livro">
                        <h3>${escaparHtml(titulo)}</h3>
                        <p>${escaparHtml(autores)}</p>
                        ${detalhes ? `<p class="meta">${escaparHtml(detalhes)}</p>` : ""}
                        <a href="https://openlibrary.org${encodeURI(l.key)}" target="_blank" rel="noopener noreferrer">Ver na Open Library</a>
                    </div>
                </article>
            `;
        }).join("");

        painelResultados.innerHTML = `
            <p class="total-resultados">${total.toLocaleString("pt-BR")} resultado(s) — exibindo ${livros.length}</p>
            <div class="lista-livros">${cards}</div>
        `;
    }

  

    function fecharModal() {
        modalContainer.classList.add("esconde");
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement !== campoBusca) {
            e.preventDefault();
            campoBusca.focus();
        } else if (e.key === "Escape") {
            if (!modalContainer.classList.contains("esconde")) {
                fecharModal();
            } else if (campoBusca.value.length > 0) {
                abrirModalConfirmacaoLimpar();
            }
        }
    });

    function mostrarErro(mensagem) {
        msgErro.textContent = mensagem;
        msgErro.classList.remove("esconde");
        campoBusca.classList.add("erro-campo");
    }

    function limparErro() {
        msgErro.textContent = "";
        msgErro.classList.add("esconde");
        campoBusca.classList.remove("erro-campo");
    }

    function escaparHtml(texto) {
        return String(texto).replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
    }
});
