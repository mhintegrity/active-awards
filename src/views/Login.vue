<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="login" type=submit>Login</button>
        <p>You don't have an account ? You can <router-link to="/sign-up" >create one</router-link></p>
        <button v-on:click="logout">Log Out</button>
    </div>
</template>

<script>
    import firebase, { functions } from 'firebase';

    export default {
        name: 'login',
        data() {
            return{
                email: '',
                password: ''
            };
        },
        methods: {
            login: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    // special note: Using an arrow function will bind the callback to the current context, so this.$router still works.
                    const email = user.user.email;
                    this.$emit('user-login-email', email);
                    this.$router.replace('home');
                },
                (err) => {
                    alert('Warning! ' + err.message)
                }
                );
            },
            logout: function() {
                firebase.auth().signOut().then(
                    (user) => {
                        alert('Success logging out');
                        this.$emit('user-login-email', 'None');
                    },
                    (err) => {
                        alert(`Failed logging out ${err.message}`);
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>
