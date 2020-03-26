<template>
    <div class="login-container">
        <v-container fluid class="margin-all">
            <v-row class="md-12">
                <v-col sm="12" md="2" lg="3"></v-col>
                <v-col sm="12" md="8" lg="6">
                    <div class="login-square">
                        <div class="login-title">Logar</div>
                        <div class="login-email">
                            <v-text-field
                                label="Email"
                                placeholder="algumemail@email.com"
                                outlined
                            ></v-text-field>
                        </div>
                        <div class="login-senha">
                            <v-text-field
                                label="Password"
                                type="password"
                                outlined
                            ></v-text-field>
                        </div>
                        <div class="login-button">
                            <v-btn color="orange" style="width:100%;">Logar</v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col sm="12" md="2" lg="3"></v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
    .login-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-square {
        width: 100%;
        min-height:50vh;
        border:1px solid white;
        padding:10px;
        border-radius: 10px;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .login-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        justify-content: center;
        margin-bottom:10px;
        margin-top:10px;
    }
</style>