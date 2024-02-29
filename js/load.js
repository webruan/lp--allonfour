// selecione o elemento que deseja carregar
const headerSection = document.getElementById('header');

// função que verifica se o elemento está visível na tela
function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
}

// função que carrega a seção quando o usuário chegar nela
function loadSection() {
    if (isElementVisible(headerSection)) {
        iframe = 
        `
        <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLMRLTZ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
        `;

        video =
        `
        <div class="container video">
            <div class="content">
                <div class="column">
                    <div class="text">
                        <div class="title">
                            <h2>Aprenda mais sobre o procedimento e suas vantagens:</h2>
                        </div>
                    </div>

                    <div class="video">
                        <iframe src="https://www.youtube.com/embed/kQWbVeLL7sc?controls=0" 
                        title="Procedimento All-on-Four" 
                        frameborder="0" 
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                    </div>

                    <div class="btn">
                        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511947180152&text=Ol%C3%A1,%20tenho%20interesse%20em%20agendar%20a%20consulta%20online%20gratuita%20sobre%20o%20All-on-Four"><i class='bx bxl-whatsapp'></i>Agendar agora consulta gratuita pelo WhatsApp!</a>
                    </div>
                </div>
            </div>
        </div>
        `;

        differentials =
        `
        <div class="container differentials">
            <div class="content">
                <div class="column">
                    <div class="text">
                        <div class="title">
                            <h2>Diferenciais do protocolo All-on-Four:</h2>
                        </div>
                    </div>

                    <div class="grid">
                        <div class="box">
                            <div class="img">
                                <img loading="lazy" src="./src/images/implant-all-on-four.webp" alt="Implante All-on-Four">
                            </div>

                            <div class="text">
                                <div class="paragraph">
                                    <p>Pelo fato da prótese ser fixada nos implantes, não há riscos de perdê-las</p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="img">
                                <img loading="lazy" src="./src/images/dentadura-copo.webp" alt="Dentadura no copo de agua">
                            </div>

                            <div class="text">
                                <div class="paragraph">
                                    <p>Nunca mais tenha vergonha de precisar tirar a dentadura</p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="img">
                                <img loading="lazy" src="./src/images/eating-apple.webp" alt="Mulher comendo maça verde">
                            </div>

                            <div class="text">
                                <div class="paragraph">
                                    <p>Conforto garantido ao mastigar</p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="img">
                                <img loading="lazy" src="./src/images/eating-food.webp" alt="Mulher comendo salada">
                            </div>

                            <div class="text">
                                <div class="paragraph">
                                    <p>Paladar mais aguçado, permitindo saborear melhor os alimentos</p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="img">
                                <img loading="lazy" src="./src/images/money.webp" alt="Preço reduzido">
                            </div>

                            <div class="text">
                                <div class="paragraph">
                                    <p>Preço reduzido em comparação às outras técnicas de reabilitação com implantes</p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="img">
                                <img loading="lazy" src="./src/images/surgery.webp" alt="Cirurgia dental">
                            </div>

                            <div class="text">
                                <div class="paragraph">
                                    <p>Cirurgia rápida e menos invasiva</p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="img">
                                <img loading="lazy" src="./src/images/clock.webp" alt="Tempo passando rápido">
                            </div>

                            <div class="text">
                                <div class="paragraph">
                                    <p>Recuperação rápida (no máximo quatro dias.)</p>
                                </div>
                            </div>
                        </div>

                        <div class="box">
                            <div class="img">
                                <img loading="lazy" src="./src/images/sedacao.webp" alt="Sedaçao odontologica">
                            </div>

                            <div class="text">
                                <div class="paragraph">
                                    <p>Com o uso da sedação, tenha um procedimento mais confortável</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="btn">
                        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511947180152&text=Ol%C3%A1,%20tenho%20interesse%20em%20agendar%20a%20consulta%20online%20gratuita%20sobre%20o%20All-on-Four"><i class='bx bxl-whatsapp'></i>Agendar agora</a>
                    </div>
                </div>
            </div>
        </div>
        `;

        carousel =
        `
        
        `;

        footer =
        `
        <div class="container">
            <div class="content">
                <div class="column upper">
                    <div class="row">
                        <div class="column map">
                            <div class="text title">
                                <h4>Se preferir, visite nossa clínica:</h4>
                            </div>

                            <div class="map">
                                <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.285140393636!2d-46.54599508502026!3d-23.665758884631174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42f7143c467f%3A0x58842b5b6db27528!2sOESPPRIME%20SANTO%20ANDRE!5e0!3m2!1spt-BR!2sbr!4v1676289609506!5m2!1spt-BR!2sbr" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        <div class="column social">
                            <div class="text social">
                                <p>Me siga nas redes sociais</p>
                            </div>

                            <div class="icons">
                                <i class='bx bxl-instagram'></i>
                                <i class='bx bxl-facebook'></i>
                            </div>
                        </div>
                    </div>

                    <div class="text links">
                        <small>
                            <a target="_blank" rel="noopener noreferrer" href="./termosecondições.html">Termos de Uso</a>
                            |
                            <a target="_blank" rel="noopener noreferrer" href="./politicadeprivacidade.html">Política de Privacidade</a>
                        </small>
                    </div>

                    <div class="text copy">
                        <small>Copyright 2023 © Todos os direitos reservados à Dr. Ricardo</small>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    document.getElementById('iframe').innerHTML = iframe;
    document.getElementById('video').innerHTML = video;
    document.getElementById('differentials').innerHTML = differentials;
    // document.getElementById('imgs').innerHTML = carousel;
    document.getElementById('footer').innerHTML = footer;

    window.removeEventListener('scroll', loadSection);
}

window.addEventListener('scroll', loadSection);
