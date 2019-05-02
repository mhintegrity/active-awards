<template>
  <div id="app">
    <header>
        <h1>Single Page App Home Page with Login</h1>
        <nav>
            <ul>
                <li>
                    <router-link to="/home">Home Page</router-link>
                </li>
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
            </ul>
        </nav>
        <p> User {{ loginUser }}</p>
    </header>

    <router-view v-on:user-login-email="userLoginEmail" />

    <footer>
        <em>(c) 2019 copyright <a href="https://mhintegrity.com">MHIntegrity</a></em>
    </footer>
  </div>
</template>

<script>
    import firebase, { functions } from 'firebase';

    export default {
        name: 'app',
        data() {
            return{
                loginUser: 'None'
            };
        },

        methods: {
            userLoginEmail: function(email) {
                this.loginUser = email;
            }
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 30px;
    }

    header {
        position: sticky;
        top: 0px;
        background-color: lightsteelblue;
        padding: 16px;
        margin: 12;
    }

    header nav ul {
        list-style-type: none;
    }

    header nav ul li {
        margin: 6px;
    }

    footer {
        position: fixed;
        bottom: 0%;
        background-color: lightsteelblue;
        padding: 8px;
        width: 100%;
    }

    section {
        display: flex;
        flex-direction: column;
        padding: 12px;
        margin: 12px;
    }

    section p,
    details {
        margin: 6px;
        padding: 6px;
        line-height: 150%;
    }
</style>
