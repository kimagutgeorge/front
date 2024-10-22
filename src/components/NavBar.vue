<template>
    <div class="nav-bar">
        <div class="col-12 title-lg">
            <img src="../assets/images/logo.svg" alt="">
        </div>
        <div class="col-12">
        <li><RouterLink to="/home" class="row text-secondary" active-class="active"><div class="col-2"><i class="fa-solid fa-home"></i></div><div class="col-10">Dashboard</div></RouterLink></li>
        <li><RouterLink to="/events" class="row text-secondary" active-class="active"><div class="col-2"><i class="fa-solid fa-calendar"></i></div><div class="col-10">Events</div></RouterLink></li>
        <li><RouterLink to="/categories" class="row text-secondary" active-class="active"><div class="col-2"><i class="fa-solid fa-shapes"></i></div><div class="col-10">Categories</div></RouterLink></li>
    </div>
    </div>
</template>

<script>
export default {
   name: 'NavBar'
}
</script>