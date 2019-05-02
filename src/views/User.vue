<template>
    <section class="user-page">
        <form>
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    </section>
</template>

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
        margin: 12px;
        padding: 12px;
        line-height: 150%;
    }

    /* Full-width inputs */
    input[type=text],
    input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    /* Set a style for all buttons */
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    /* Add a hover effect for buttons */
    button:hover {
        opacity: 0.8;
    }

    /* Extra style for the cancel button (red) */
    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
    }

    /* Add padding to containers */
    .container {
        padding: 16px;
    }

    /* The "Forgot password" text */
    span.psw {
        float: right;
        padding-top: 16px;
    }
</style>
