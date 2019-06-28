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
                    <v-tab href="#userlogin">
                        User Login
                    </v-tab>
                    <v-tab href="#driverlogin">
                        Driver Login
                    </v-tab>
                    <v-tab href="#adminlogin">
                        Admin Login
                    </v-tab>

                    <v-tab-item id="userlogin">
                        <v-card>
                        <v-card-text>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >

                                <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                ></v-text-field>
                                
                                <v-text-field
                                v-model="password"
                                label="Password"
                                required
                                type="password"
                                ></v-text-field>

                                <v-btn
                                color="success"
                                @click="userLogin"
                                >
                                Login
                                </v-btn>
                            </v-form>
                        </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item id="driverlogin">
                        <v-card>
                        <v-card-text>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >

                                <v-text-field
                                v-model="phone"
                                label="Phone"
                                required
                                ></v-text-field>
                                
                                <v-text-field
                                v-model="password"
                                label="Password"
                                required
                                type="password"
                                ></v-text-field>

                                <v-btn
                                color="success"
                                @click="driverLogin"
                                >
                                Login
                                </v-btn>
                            </v-form>
                            
                        </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item id="adminlogin">
                        <v-card>
                        <v-card-text>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >

                                <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                                ></v-text-field>
                                
                                <v-text-field
                                v-model="password"
                                label="Password"
                                required
                                type="password"
                                ></v-text-field>

                                <v-btn
                                color="success"
                                @click="adminLogin"
                                >
                                Login
                                </v-btn>
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
import {login} from '../helpers'
  export default {
    data: () => ({
      valid: true,
      email: '',
      phone: '',
	  password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }),

    methods: {
      userLogin () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      driverLogin() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      adminLogin(){
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      }
    }
  }
</script>