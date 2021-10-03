<template>
    <div class="index">
        <header>
            <div class="video">
                <video autoplay muted loop poster="@/assets/banner/img.jpg">
                    <source src="@/assets/banner/video.mp4" type="video/mp4">
                </video>
            </div>
            <div class="event">🎉 Participez à notre évènement sur <a href="https://www.eventbrite.fr/e/billets-formateursrices-upgradez-vos-contenus-par-le-jeu-184208892757">Eventbrite</a> 🎉</div>
            <div class="top-bar">
                <div class="start">
                    <img src="@/assets/banner/logo.svg" alt="ogmenthe">
                </div>
                <div class="end">
                    <a href="#notre-mission">Notre mission</a>
                    <a href="#tarifs">Tarifs</a>
                    <a href="#retours-client">Retours client</a>
                    <a href="#acceder-a-la-plateforme">Accéder à la plateforme</a>
                </div>
            </div>
            <div class="banner">
                <h2>Un vent de <span>fraîcheur</span> sur vos formations !</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h3>
            </div>
        </header>
        <main>
            <section id="notre-mission">
                <h4>Notre mission</h4>
                <div>
                    <p>👍 Améliorer le contenu de vos formations en les gamifiant</p>
                    <p>👩‍🏫 Ajouter de l'impact dans vos formations</p>
                    <p>🌟 Améliorer l’expérience client</p>
                    <p>🛒 Faciliter la vente de vos catalogues de formation</p>
                </div>
            </section>
            <section class="purple" id="tarifs">
                <h4>Tarifs</h4>
                <Plans @selectPlan="handlePlanSelection($event)" />
            </section>
            <section id="retours-client">
                <h4>Retours client</h4>
                <p>Je prendrai le pack gold dès qu'il sortira !<span class="signature"> - Pierre, formateur</span></p>
            </section>
            <section class="purple" id="acceder-a-la-plateforme">
                <h4>Accéder à la plateforme</h4>
                <p>Nous sommes encore en phase de lancement, abonnez-vous à notre newsletter pour recevoir des nouvelles d'ogmenthe.</p>
                <Contact :plan="selectedPlan" />
            </section>
        </main>
    </div>
</template>

<script>
    import Contact from '@/components/Contact.vue';
    
    export default {
        components: {
            Contact
        },
        data() {
            return {
                isEmailOk: null,
                selectedPlan: 'inconnu',
            }
        },
        methods: {
            handlePlanSelection(plan) {
                this.selectedPlan = plan;
                this.$router.push({ path: '#acceder-a-la-plateforme' });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .index {
        header {

            .video {
                overflow: hidden;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: -1;
            }

            .event {
                width: 100%;
                text-align: center;
                padding: $mSize 0;
                background-color: rgba($backgroundColor, 0.3);
                font-size: $sFontSize;
                
                a {
                    color: $greenColor;
                    text-decoration: underline;
                }
            }

            .top-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: $xlSize $xxlSize;
                flex-wrap: wrap;
                
                .start {
                    display: flex;
                    align-items: center;

                    img {
                        width: 150px;
                    }
                }

                .end {
                    a {
                        margin-left: $xxlSize;
                    }
                }
            }

            .banner {
                margin: 0 $xxlSize;

                h2 {
                    max-width: 500px;

                    span {
                        color: $greenColor;
                    }
                }

                h3 {
                    max-width: 800px;
                    margin-bottom: $xxlSize;
                }
            }
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: $xxlSize; 

            section {
                padding: $xlSize;
                width: 100%;
                background-color: $backgroundColor;
                display: flex;
                flex-direction: column;
                align-items: center;

                &.purple {
                    background-color: $purpleColor;
                }

                p {
                    font-size: $sFontSize;
                }

                .signature {
                    font-style: italic;
                    color: rgba(white, 0.5)
                }
            }
        }
    }
</style>
