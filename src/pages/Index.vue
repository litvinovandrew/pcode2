<template>
  <Layout>
    <img class="greet-image" src="../../uploads/hello.svg" />

    <h2 class="mb-4">PCode Store</h2>
    <p>
      This is a starter project for Pcode Store that comes with an idea of
      simplifying WEB development. We decided that current state of doing WEB
      software is overcomplicated by developers, users and technologies . So we
      are here to prove that it is possible to do coding in a simple way and
      reasonable time.
    </p>

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

    <h3 class="mt-5 mb-4">Getting started</h3>
    <p>
      The easiest way to get started with us is to use contact form of the site,
      We are open to disscussions and ready to implement another useful fuction.
    </p>

    <h3 class="mt-4 mb-4">
      We are looking for the sympathizers, belivers, followers
    </h3>

    <p>
      If you agree that thigs are overcomplicated on the WEB and you see the way
      to simplify it - welcome to the club
    </p>

    <h3 class="mt-4 mb-4">We are social</h3>
    <p>
      <a href="https://www.facebook.com/PcodeStore/">Facebook</a>
    </p>
    <p>
      <a href="https://www.youtube.com/channel/UCPrLM3ucvdKH-P4F1_Eq5iQ">Youtube</a>
    </p>
    <p>
      <a href="https://medium.com/@pcode.store"> Medium </a>
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Development should be simple"
  }
};
</script>

<style>
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
