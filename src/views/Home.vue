<template>
    <section class="home-page">
        <article id="article-1">
            <h2>Article 1</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsum. Maiores sunt iusto ipsa magni
                atque cumque pariatur accusamus nostrum officia rem beatae, cum blanditiis a assumenda nulla recusandae
                eum.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fugit aperiam pariatur sunt
                aspernatur minus dolorem ullam rerum magni, est autem tenetur laboriosam quos obcaecati asperiores
                atque. Doloribus, quam vero?
            </p>
            <details>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum enim nesciunt incidunt iure corporis harum
                tenetur accusamus aspernatur temporibus eligendi consequuntur earum esse commodi minima assumenda, vel
                excepturi! Repudiandae, veritatis.
            </details>
            <b>End of article 1</b>
        </article>
        <article id="article-2">
            <h2>Article 2</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ratione explicabo et, animi modi
                dolorem sequi error veritatis fugit. Adipisci, repudiandae enim fuga reiciendis facere ipsa voluptatem
                nulla. Nobis, harum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, qui? Velit hic assumenda necessitatibus
                officiis quo optio delectus nesciunt ipsa quam dolorem officia doloribus modi praesentium sunt,
                voluptatem, provident consectetur?
            </p>
            <b>End of article 2</b>
        </article>
        <article id="article-3">
            <h2>Article 3</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem praesentium accusantium aliquam,
                quidem ullam in! Esse sit architecto magnam amet, commodi suscipit nostrum quae vero quos, dignissimos,
                laudantium dolores aperiam?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum voluptate. Facere, omnis? Facilis
                ut repellat tenetur nam libero, quo aut quisquam consectetur! Vitae nemo numquam sapiente delectus?
                Illum, aliquam!
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente facere ipsa numquam facilis illum
                error. Ducimus mollitia, ab sit consequuntur doloribus explicabo similique doloremque, voluptatibus
                cupiditate, quos tenetur quod necessitatibus?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam recusandae quisquam odit mollitia!
                Facilis possimus laboriosam tempore reprehenderit, voluptatem sequi accusamus! Itaque nostrum
                architecto, eligendi natus omnis impedit facere beatae!
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi aliquid esse sit, harum fugit rem.
                Deleniti explicabo incidunt fuga ea cumque impedit. Earum, cupiditate voluptate. Autem numquam maiores
                explicabo dolorum.
            </p>
        </article>
    </section>
</template>

<script>

export default {
  name: 'home',
  components: {
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
