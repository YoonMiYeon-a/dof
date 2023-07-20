<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Updates</router-link>
      <router-link to="/Favorite">Favorite</router-link>
      <router-link to="/Setting">Setting</router-link>
      <router-link to="/Menu">Menu</router-link>
    </nav>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="울랄라랩 메인"/> -->
    <Login />
    <!-- <Map /> -->
    
    <!-- <Map /> -->
    <AddGoogleMap />
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
import Map from './components/Map.vue'
import AddGoogleMap from './components/AddGoogleMap.vue'


export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Login,
    AddGoogleMap,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  width: 368px;
  margin: 0 auto;
  background: #fff;
  font-size: 17px;
  padding: 16px;
  line-height: 1.3;
  line-height: 1.3;
  padding-bottom: 95px;
}

*{-webkit-text-size-adjust:none;word-break:keep-all}
*:focus {outline:none;}
body {-webkit-font-smoothing:subpixel-antialiased;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {display:block}

body, form, div, p, h1, h2, h3, h4, h5, h6, dl, dt, dd, ul, ol, li, fieldset, th, td, input, textarea,button,select,pre{margin:0;padding:0; font-family: 'NotoKR' , 'Sans-serif'; font-weight:normal; letter-spacing: -0.7px;}
body{-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}
pre{text-align:left}
li,ol,ul,dl{list-style:none}
a{color:#fff; -webkit-tap-highlight-color:transparent; text-decoration:none}
a[href^="tel"]{ font-style:normal}
a,i{display:inline-block;}

a{text-decoration:none;color:#333;/*outline:none;*//* select-dummy:expression(this.hideFocus=true); */cursor:pointer}/* w3c css검사 */
a:hover,a:active,a:focus{text-decoration:none;cursor:pointer}
a label{cursor:pointer;}

address, caption, em, var{font-style:normal;}
input, textarea, select{letter-spacing:normal}
fieldset, img{border:0}
legend, caption,hr{display:none}
img{border:0;vertical-align:middle; max-width:100%}
table{width:100%; border-collapse:collapse;border-spacing:0}
form, fieldset, iframe {display:block; border:0}
br{letter-spacing:normal;}

input[type="text"], input[type="email"], input[type="password"], input[type="tel"]{vertical-align:middle; font-size:17px; margin: 4px 0;padding:11px;border:1px solid #EBEBEB;box-sizing:border-box; -webkit-box-sizing:border-box;-moz-box-sizing:border-box; -webkit-box-sizing:border-box; outline:none}
input[type="checkbox"]{border:1px solid #a7a7a7;-webkit-border-radius:2px;/*-webkit-appearance:none;-webkit-border-radius:0;*/}
input:checked[type="checkbox"]{-webkit-appearance:checkbox}
input[type="radio"]{border:none;-webkit-appearance:none}
button{overflow:visible; margin:0; padding:0; border:0 none; font-family:'notokr-regular', 'Sans-serif'; vertical-align:top; cursor:pointer;}
button,input[type="button"],input[type="submit"],input[type="reset"],input[type="file"]{-webkit-appearance:button;border-radius:0}
input[type="file"]{display:none;}
textarea{-webkit-appearance:none;outline:none}
select{-webkit-appearance:menulist-text;-webkit-appearance:none; appearance:none;}
select::-ms-expand { display: none; }/* for IE 11 */
marker {display: none;}


video[poster]{height:100%;width:100%;object-fit:inherit;}

.blind{position:absolute !important; width:1px !important; height:1px !important; margin:-1px !important; font-size:1px !important; line-height:0 !important; clip:rect(0,0,0,0);} 

/*input[type="password"] {-webkit-text-security:disc;}*/

input,textarea{-webkit-appearance:none;-webkit-border-radius:0}

div{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}


/* all */
::-webkit-input-placeholder {font-family:'notokr-regular',sans-serif; letter-spacing:-1px; font-size:0.93rem;color:#979797}
::-moz-placeholder {font-family:'notokr-regular',sans-serif; letter-spacing:-1px; font-size:0.93rem;color:#979797} /* firefox 19+ */
:-ms-input-placeholder {font-family:'notokr-regular',sans-serif; letter-spacing:-1px; font-size:0.93rem;color:#979797} /* ie */
input:-moz-placeholder {font-family:'notokr-regular',sans-serif; letter-spacing:-1px; font-size:0.93rem;color:#979797}



/* Font */
@font-face {
	font-family: 'NotoKR medium';
	src: url(assets/font/NotoSansKR-Medium.eot);

  src: local('Noto Sans CJK KR medium'), local('Noto Sans KR medium'), local('NotoSansKR-medium'),
	url(assets/font/NotoSansKR-Medium.eot?#iefix) format('embedded-opentype'),
	url(assets/font/NotoSansKR-Medium.woff2) format('woff2'), 
	url(assets/font/NotoSansKR-Medium.woff) format('woff');
	font-weight: normal
}
@font-face {
	font-family: 'NotoKR';
	src: url(assets/font/NotoSansKR-Regular.eot); 
	src: local('Noto Sans CJK KR Regular'), local('Noto Sans KR Regular'), local('NotoSansKR-Regular'),
	url(assets/font/NotoSansKR-Regular.eot?#iefix) format('embedded-opentype'),
	url(assets/font/NotoSansKR-Regular.woff2) format('woff2'), 
	url(assets/font/NotoSansKR-Regular.woff) format('woff');
	font-weight: normal
}
@font-face {
	font-family: 'NotoKR Light';
	/* src: url(assets/font/NotoSansKR-Light.eot);  */
	src: local('Noto Sans CJK KR Light'), local('Noto Sans KR Light'), local('NotoSansKR-Light'),
	/* url(assets/font/NotoSansKR-Light.eot?#iefix) format('embedded-opentype'), */
	url(assets/font/NotoSansKR-Light.woff2) format('woff2'), 
	url(assets/font/NotoSansKR-Light.woff) format('woff');
	font-weight: normal
}


/* 커스텀 */
input{padding: 11px; border:1px solid #EBEBEB;}
input::placeholder {color:#888;}
h2 {
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 16px;
}
button {
  padding:10px;
  border-radius: 20px;
  margin: 4px 0;
  color: #222;
}
nav {
  position: fixed;
  padding: 10px;
  left: 0;
  right: 0;
  bottom:0;
  background: #fff;
  z-index: 10;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  box-shadow: 0 0 10px gray;
  align-items: flex-end;
}
nav a {
  padding: 10px;
  font-size: 11px;
  color: #888;
}
#nav a.router-link-exact-active {
  color: #FF8C21 ;
}
</style>
