<template>
    <div class="mainContainer">
            <div class="dropDown-items">
                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>
            <div class="p-0 d-flex">
                <div class="mainSelect">
                    Cosa vuoi imparare?
                </div>
                <div class="mainSelect__button">
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        name: "MainSelect",
        data() {
            return {
                
            }
        },
        props: {
            placeholder: String,
        }
    }
</script>
<style scoped style lang="scss">
    @import "../../style.scss";
.mainSelect {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    border: 1px solid #000;
    background: #FFF;
    color: darkgray;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
    width: 100%;

    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    

    display: flex;
    justify-content: start;
    align-items: center;
}
i {
    color: $color__primary;
       
}

.mainContainer {
    position: relative;
    padding: 0;
    width: 100%;
}
.dropDown-items {
    position: absolute;
    opacity: 0;
    width: 100%;
    bottom: 100%;
    background-color: $color__light;
}
.mainSelect__button {
    padding: 0.5rem 1rem;
    border-right: 1px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

  &:hover {
    background-color: $color__primary;
    cursor: pointer;
    .dropDown-items {
        opacity: 100%;
    }
    i {
      color: black;
    }
  }
}






  
    
</style>