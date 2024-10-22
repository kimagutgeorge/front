<template>
    <div class="row top-bar">
        <div class="col-12">
            <p class="text-sm text-muted">Pages / {{$route.name}}</p></div>
        <div class="row">
            <div class="col-7">
            <h3 class="font-weight-bold text-secondary">{{$route.name}}</h3>
        </div>
        <div class="col-5">
            <div class="bar-panel row">
                <div class="col-8">
                <form action="">
                    <input type="text" class="form-control" placeholder="Search">
                </form>
            </div>
            <div class="col-4">
                <i class="fa-solid fa-bell text-secondary"></i>
                <i class="fa-solid fa-message text-secondary"></i>
                <i class="fa-solid fa-user float-end"></i>
            </div>
            </div>
        </div>
        </div>
    </div>
    
</template>

<script>
export default {
   name: 'TopBar'
}
</script>