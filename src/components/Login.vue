<template>
  <div>
    <div class="allWrap logInfo">
      <header>
        <!-- <h1><a href="#" class="logo" title="울랄라"></a></h1> -->
          <h2>환영합니다!</h2>
          <p>신속하고 정확하게 업무하실 수 있도록 도와드리겠습니다.</p>
      </header>
      <!-- <div class="logInfo">
      </div> -->
      <div class="inpt_group">
        <input type="email" placeholder="Enter email">
        <input type="Password" placeholder="Password">
      </div>
      <div class="right">
        <a href="#" class="link_pw">Forgot password?</a>
      </div>
      <div class="btn_group">
        <button class="btn btn_orange w100">LOGIN</button>
      </div>
      <div class="btn_group colum">
        <button class="btn w100">Countiue With Apple</button>
        <button class="btn w100">Countiue With Apple</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'VueLogin',
}
</script>

<style>
html, body{width:100%; height:100%; overflow-x:hidden; overflow-y:auto; background: #ededed; margin: 0; padding: 0;}
.contentWrap .rContentBox{overflow-y:inherit;}
.guide .contentWrap{width:1600px; margin:0 auto;}
.comonWrap{margin-bottom:30px;}
.comonWrap > h3{background:#222; color:#fff; padding:5px 20px; margin-bottom:10px; border-radius:6px 6px 0 0;}
.comonWrap .sample{padding:10px 0}
.comonWrap .exType{margin-top:20px;}
.comonWrap .exType h5{margin-bottom:5px;}
.comonWrap .exTxt{padding:20px; background:#f2f2f2; font-size:14px}
.comonWrap .exTxt ul li{line-height:26px;}
.exTypeWrap{position:relative;}
/* .exTypeWrap a.linkGo{position:absolute; right:-35px; top:0; width:18px; height:18px; background:#bebebe; border-radius:100%; background:#eee url("../images/go.png") center center no-repeat; border:1px solid #d5d5d5} */
.sample > button{margin-right:5px;}
ul {list-style: none;}

/* 커스텀 */
.inpt_group {
  display: flex;
  flex-direction: column;
}
header {
  text-align: left;
}
.orange {
  color:#FF8C21;
}
.logInfo{}
.logInfo p {
  color: #666;
}
.logInfo header{
  margin-top: 48px;
  margin-bottom: 32px;
}
.logInfo .btn_group {
}
.logInfo .link_pw {
  font-size: 13px;
  color:#666;
}
.logInfo .inpt_group {
  margin: 10px 0;
}
.logInfo .right {
  margin-bottom: 24px;
}
/* Button */
.btn {
  background: #222;
  color:#B6B6B6;
  font-weight: 500;
}
.btn_group {
  display: flex;
}
.btn_orange {
  background: #FF8C21;
  color:#222;
}

/* Common */
.right {
  display: flex;
  justify-content: end;
}
.w100 {
  width: 100%;
}
.colum {
  flex-direction: column;
}
</style>