<template>
    <form @submit.prevent="addContact()">
        <div class="field">
            <input type="email" v-model="email">
            <input type="submit" value="Email">
        </div>
        <p v-if="error !== null" :class="{ error }">{{ message }}</p>
    </form>
</template>

<script>
    import { airtable } from '@/plugins/airtable.js';

    export default {
        props: {
            plan: String
        },
        data() {
            return {
                email: "",
                error: null
            }
        },
        computed: {
            message() {
                if (this.error) {
                    return "Oups, quelque chose s'est mal passé...";
                } else {
                    return "Nous avons bien reçu votre adresse email."
                }
            }
        },
        methods: {
            async addContact() {
                this.error = null;
                try {
                    const { error } = await airtable('contacts').create({
                        email: this.email,
                        created_at: Date.now(),
                        status: 'created',
                        plan: this.plan,
                    });
                    if (error) {
                        this.handleError(error);
                    } else {
                        this.handleOk();
                    }
                } catch (error) {
                    this.handleError(error);
                }
            },
            handleError(error) {
                console.error(error);
                this.error = true;
            },
            handleOk() {
                this.error = false;
            }
        },
    }
</script>

<style lang="scss" scoped>
    form {
        .field {
            display: flex;
            margin: 0;
            margin-bottom: $xlSize;

            input[type=email] {
                border-radius: $mSize 0 0 $mSize;
            }

            input[type=submit] {
                border-radius: 0 $mSize $mSize 0;
            }

            img {
                color: $fontColor;
                width: $xlSize;
                height: $xlSize;
            }
        }

        p {
            font-size: $sSize;
            border: 1px solid $greenColor;
            border-radius: $mSize;
            background-color: rgba($greenColor, 0.25);
            padding: $mSize $lSize;

            &.error {
                border-color: $purpleColor;
                background-color: rgba($purpleColor, 0.25);
            }
        }
    }
</style>