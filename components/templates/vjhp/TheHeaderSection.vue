<template>
  <div id="wrapper">
    <header id="header">
      <span class="logo">
        <img src="~assets/images/vjhp/logo.svg?data" alt="Vera&John" />
      </span>
      <h2>ベラジョン・オンラインカジノへようこそ!</h2>
      <h1>日本NO.1カジノ!</h1>
      <h3>
        圧倒的な人気とシェア!
        <br />さらに安心・安全・楽しいの3拍子がばっちり揃う、業界ナンバーワンカジノで遊んじゃおう!
      </h3>
      <ul class="items-list gameslider">
        <li>
          <a href="https://www.verajohn.com/home">
            <img src="~assets/images/vjhp/game1.svg?data" alt="game1"/>
          </a>
        </li>
        <li>
          <a href="https://www.verajohn.com/home">
            <img src="~assets/images/vjhp/game2.svg?data" alt="game2"/>
          </a>
        </li>
        <li>
          <a href="https://www.verajohn.com/home">
            <img src="~assets/images/vjhp/game3.svg?data" alt="game2"/>
          </a>
        </li>
        <li>
          <a href="https://www.verajohn.com/home">
            <img src="~assets/images/vjhp/game4.svg?data" alt="game4"/>
          </a>
        </li>
        <li>
          <a href="https://www.verajohn.com/home">
            <img src="~assets/images/vjhp/game5.svg?data" alt="game5"/>
          </a>
        </li>
        <li>
          <a href="https://www.verajohn.com/home">
            <img src="~assets/images/vjhp/game6.svg?data" alt="game6"/>
          </a>
        </li>
      </ul>
      <h4>登録してからすぐ使える! 業界一お得なビギナーズボーナスのおまけつき!</h4>
      <div class="chest">
        <a href="https://www.verajohn.com/home">
          <img src="~assets/images/vjhp/chest.svg?data" alt="chest"/>
        </a>
      </div>
      <p>お試し登録ボーナス &amp; 最初3回のご入金に合計最大$1000ボーナスをプレゼント!</p>
      <a class="button primary" v-bind:href="header_button_redirect_url">{{ header_text }}</a>
      <p>
        アカウントをお持ちの方はコチラから<a v-bind:href="header_login_account_text_redirect_url">{{ header_login_account_text }}</a>
      </p>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderSection',
  props: {
    // header_text: {
    //   type: String,
    //   required: true,
    // },
    // header_button_redirect_url: {
    //   type: String,
    //   required: true,
    // },
    // header_login_account_text: {
    //   type: String,
    //   required: true,
    // },
    // header_login_account_text_redirect_url: {
    //   type: String,
    //   required: true,
    // },
    // homepage_title: {
    //   type: String,
    //   required: true,
    // },
    login_header_text: {
      type: String,
      required: true,
    },
login_header_redirect_url: {
      type: String,
      required: true,
    },
header_section_welcome_message: {
      type: String,
      required: true,
    },
header_section_main_heading: {
      type: String,
      required: true,
    },
header_section_heading_subtitle: {
      type: String,
      required: true,
    },
header_section_game_slider_url_1: {
      type: String,
      required: true,
    },
header_section_game_slider_url_2: {
      type: String,
      required: true,
    },
header_section_game_slider_url_3: {
      type: String,
      required: true,
    },
header_section_game_slider_url_4: {
      type: String,
      required: true,
    },
header_section_game_slider_url_5: {
      type: String,
      required: true,
    },
header_section_game_slider_url_6: {
      type: String,
      required: true,
    },
header_section_best_deal_caption: {
      type: String,
      required: true,
    },
header_section_best_deal_small_caption: {
      type: String,
      required: true,
    },
header_section_register_button: {
      type: String,
      required: true,
    },
header_section_register_button_url: {
      type: String,
      required: true,
    },
header_section_account_login: {
      type: String,
      required: true,
    },
header_section_account_login_url: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>
#wrapper {
  background-image: url("~assets/images/vjhp/bg.svg?data");
}
</style>
