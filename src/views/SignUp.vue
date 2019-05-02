<template>
    <div class="sign-up">
        <h3>Let's create a new account!</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signup">Sign Up</button>
        <p>or go back to <router-link to="/login" >login</router-link>.</p>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'signUp',
        data() {
            return{
                email: '',
                password: ''
            };
        },
        methods: {
            signup: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        alert('Your account has been created');
                        this.$router.push('/login');
                    },
                    (err) => {
                        alert(`Warning! ${err.message}`)
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .sign-up {
        margin-top: 40px;
    }

    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 10px;
        width: 10%;
        cursor: position;
    }

    p {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>
