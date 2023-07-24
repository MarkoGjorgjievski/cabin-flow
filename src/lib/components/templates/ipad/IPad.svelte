<div id='ipad'>
  <div class='camera'></div>
  <slot />
  <div class='home-btn'></div>
</div>

<style>
    #ipad {
        min-width: 1152px;
        padding: 48px 60px;
        background: black;
        border-radius: 21px;
        border: 4px solid #c7cbce;
        box-shadow: 5px 19px 39px #757575;
        overflow: hidden;
        transform: scale(0.75) translateZ(0);
        backface-visibility: hidden;}

    .camera {
        border-radius: 10px;
        width: 12px;
        height: 12px;
        position: absolute;
        background-color: #03239d;
        border: 2px solid #1C1C1C;
        left: 19px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        box-sizing: border-box;
    }

    .home-btn {
        border-radius: 90px;
        width: 34px;
        height: 34px;
        position: absolute;
        background: linear-gradient(170deg, rgba(64,65,67,1) 0%, rgba(64,65,67,1) 25%, rgba(233,234,236,1) 38%, rgba(233,234,236,1) 63%, rgba(64,65,67,1) 94%, rgba(64,65,67,1) 100%);
        right: 12px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        box-sizing: border-box;
    }

    .home-btn::after {
        content: "";
        width: calc(90% - 1px);
        height: calc(90% - 1px);
        border-radius: 50%;
        background: black;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
</style>
