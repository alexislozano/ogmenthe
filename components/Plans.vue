<template>
    <div class="plans">
        <div
            class="plan"
            v-for="plan of plans"
            :key="plan.name"
        >
            <div class="title">
                <div class="circle" :class="plan.name"></div>
                <span>{{ title(plan.name) }}</span>
            </div>
            <div v-if="plan.price" class="price">{{ plan.price }}<span class="unit">{{ plan.unit }}</span></div>
            <ul>
                <li v-for="feature of plan.features" :key="feature">
                    <CheckSvg class="icon" />
                    <span>{{ feature }}</span>
                </li>
            </ul>
            <div class="blank"></div>
            <button @click="selectPlan(plan.name)">{{ plan.button }}</button>
        </div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    import CheckSvg from "~/assets/icons/check.svg?inline";

    export default {
        components: {
            CheckSvg
        },
        data() {
            return {
                plans: [{
                    name: "silver",
                    price: 1999,
                    unit: "€/an",
                    features: [
                        "Scénario personnalisé",
                        "2 scénarios par mois",
                        "Accès aux serious games"
                    ],
                    button: "Je m'abonne 💸"
                }, {
                    name: "gold",
                    price: 3999,
                    unit: "€/an",
                    features: [
                        "Scénario personnalisé",
                        "5 scénarios par mois",
                        "Accès à tous les jeux",
                        "Accès au dashboard"
                    ],
                    button: "Je m'abonne 💸"
                }, {
                    name: "prestation",
                    price: "À la carte",
                    features: [],
                    button: "Je prends contact"
                }]
            }
        },
        methods: {
            selectPlan(plan) {
                this.$emit('selectPlan', plan)
            },
            title(name) {
                return name[0].toUpperCase() + name.slice(1);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .plans {
        display: flex;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;

        .plan {
            background-color: $backgroundColor;
            width: 300px;
            padding: $xlSize;
            border-radius: $lSize;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: $xlSize;

            .title {
                display: flex;
                align-items: center;
                font-size: $mFontSize;

                .circle {
                    $size: 12px;

                    width: $size;
                    height: $size;
                    border-radius: $size;
                    background-color: white;
                    margin-right: $mSize;

                    &.gold {
                        background-color: #f8f15b;
                    }

                    &.prestation {
                        background-color: $greenColor;
                    }
                }
            }

            .price {
                margin-top: $lSize;
                font-size: $xlFontSize;
                font-weight: 700;

                .unit {
                    font-size: $mFontSize;
                }
            }

            ul {
                list-style-type: none;
                color: inherit;
                font-size: $sFontSize;
                padding: 0;
                width: 100%;
                margin: $lSize 0;

                li {
                    display: flex;
                    align-items: center;
                    margin-bottom: $mSize;

                    .icon {
                        color: $greenColor;
                        width: $lSize;
                        margin-right: $mSize;
                    }
                }
            }

            .blank {
                flex-grow: 1;
            }

            button {
                margin-top: $lSize;
            }
        }
    }
</style>