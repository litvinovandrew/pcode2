<template>
  <Layout>
    <h1 class="mb-4">About</h1>
    <img class="about-image" src="../../uploads/profile.svg" />

   <h3 class="mt-5 mb-4">Features</h3>
    <p>This PCode project is based on some fundamental principles:</p>
    <ul>
      <li>
        bussiness needs first - code need to solve it and it is not important if
        programming technologie modern or legacy, is it programmed with TDD, DDD
        , SOLID or any other approach
      </li>
      <li>
        infrastructure costs should be low.
      </li>
      <li>
        we limit ourselfs in the list of tools we are using. It is better to
        know one technologie good that three another bad
      </li>
      <li>
        KISS - keep it simple keep it stupid - is the only paradigm we follow
      </li>
    </ul>

    <h3 class="mt-5 mb-4">We are experts in:</h3>
    <ul>
      <li>
        <b>SugarCRM - </b> popular and highly customisable CRM system. Any kind
        of customisations were previosly done by our specialists. We have our
        own tool and ready to share it with the world.
      </li>
      <li>
        <b>PHP projects maitainance </b> if you need help with Symfony, Laravel,
        Yii or other projects - we will be happy to do it in the most simple and
        effective way
      </li>
      <li>
        <b> Hosting and DevOpsing</b> we can recommend the easiest solutions. If
        you need highload - we can prepare Kubernetes solutions.
      </li>
      <li>
        <b>UX/UI improvements </b> simple javascript solutions. Read more about
        our vision for frontend development - here(under construction).
      </li>
      <li>
        <b>Gridsome - </b> Vue.js & GraphQL powered framework genrating static
        files.
      </li>
      <li>
        <b>CSS </b> it is imposible to know everithing so we do only Bootstrap /
        Bootstrap material CSS frameworks.
      </li>
    </ul>
     </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style lang="scss" scoped>
.about-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
