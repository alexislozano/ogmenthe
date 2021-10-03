<template>
    <div class="index">
        <div class="event">🎉 Participez à notre évènement sur <a href="#">Eventbrite</a> 🎉</div>
        <video autoplay muted loop id="banner" poster="@/assets/banner/img.jpg">
            <source src="@/assets/banner/video.mp4" type="video/mp4">
        </video>
        <header>
            <div class="start">
                <img src="@/assets/banner/logo.svg" alt="ogmenthe">
            </div>
            <div class="end">
                <a href="#">Notre mission</a>
                <a href="#">Tarifs</a>
                <a href="#">Retours client</a>
                <a href="#">Accéder à la plateforme</a>
            </div>
        </header>
        <main>
            <div class="banner">
                <h2>Un vent de <span>fraîcheur</span> sur vos formations !</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h3>
                <Contact :plan="selectedPlan" />
            </div>
            <Plans @selectPlan="handlePlanSelection($event)" />
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .index {
        .event {
            width: 100%;
            text-align: center;
            padding: $mSize 0;
            background-color: rgba($backgroundColor, 0.3);
            
            a {
                color: $greenColor;
                text-decoration: underline;
            }
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: $xlSize $xxlSize;

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

        main {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: $xxlSize; 

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

        #banner {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: -1;
        }
    }
</style>
