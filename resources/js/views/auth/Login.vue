<template>
    <v-container>
        <v-layout justify-center>
            <v-flex xs12 sm10 md8>
                <v-tabs
                centered
                color="cyan"
                dark
                slider-color="yellow"
                >
                    <v-tab href="#userlogin" @click="setGuard('api')">
                        User Login
                    </v-tab>
                    <v-tab href="#driverlogin"  @click="setGuard('driver')">
                        Driver Login
                    </v-tab>
                    <v-tab href="#adminlogin"  @click="setGuard('admin')">
                        Admin Login
                    </v-tab>

                    <v-tab-item id="userlogin">
                        <v-card>
                        <v-card-text>
                            <v-form ref="form" lazy-validation @submit.prevent="authenticate">
                                <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required></v-text-field>
                                
                                <v-text-field v-model="form.password" label="Password" required type="password"></v-text-field>

                                <v-btn color="success" type="submit">Login</v-btn>
								
								<v-alert :value="authError" type="error">{{ authError }}</v-alert>
                            </v-form>
                        </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item id="driverlogin">
                        <v-card>
                        <v-card-text>
                            <v-form ref="form" lazy-validation @submit.prevent="authenticate">

                                <v-text-field v-model="form.phone" label="Phone" required ></v-text-field>
                                
                                <v-text-field v-model="form.password" label="Password" required type="password"></v-text-field>

                                <v-btn color="success" type="submit">Login</v-btn>
								
								<v-alert :value="authError" type="error">{{ authError }}</v-alert>
                            </v-form>
                            
                        </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item id="adminlogin">
                        <v-card>
                        <v-card-text>
                            <v-form ref="form" lazy-validation @submit.prevent="authenticate">

                                <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required></v-text-field>
                                
                                <v-text-field v-model="form.password" label="Password" required type="password"></v-text-field>

                                <v-btn color="success" type="submit">Login</v-btn>
								
								<v-alert :value="authError" type="error">{{ authError }}</v-alert>
                            </v-form>
                        </v-card-text>
                        </v-card>
                    </v-tab-item>   
                </v-tabs>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {login} from '../../helpers/auth';

    export default {
        name: "login",
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    phone: '',
                    guard: 'api'
                },
                error: null,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
            };
        },
        methods: {
            setGuard(val){
                this.form.guard = val;
            },
            authenticate() {
                this.$store.dispatch('login');

                login(this.$data.form)
                    .then((res) => {
                        console.log('loggedin');
                        this.$store.commit("loginSuccess", res);
                        this.$router.push({path: '/'});
                    })
                    .catch((error) => {
                        console.log('login failed');
                        this.$store.commit("loginFailed", {error});
                    });
            }
        },
        computed: {
            authError() {
                return this.$store.getters.authError;
            }
        }
    }
</script>

<style scoped>
.error {
    text-align: center;
    color: red;
}
</style>

