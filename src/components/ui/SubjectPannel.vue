<template>
    <div class="container__main container-fluid px-1">
        <div class="container__child w-100">
            <div class="container d-flex flex-column px-0">
                <div class="text-">
                    Top Materie
                </div>
                <div>
                    <li>
                        Matematica
                    </li>
                    <li>
                        Inglese
                    </li>
                    <li>
                        Francese
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"SubjectPannel",
    data() {

    }
}
</script>

<style scoped lang="scss">
    .container__child {
        height: 90%;
        width: 90%;
        border-radius: 20px;
        padding: 2rem;
        background-color: rgb(253, 253, 253);
    }
    .container__main {
        position: absolute;
        top: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(60, 60, 60, 0.679);
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>