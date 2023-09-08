<template>
    <nav class="bg-navbar navbar fixed-top navbar-expand-md shadow-sm">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" :href="url">
                <div>
                    <img :src="logoSrc" alt="logo" style="width: 150px">
                </div>
            </a>

            <button class="navbar-toggler" type="button" @click="toggleNavbar">
                <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
            </button>

            <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link text-light d-none" :href="homeUrl">{{ 'Home' }}</a>
                    </li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li class="nav-item container-link-nav me-4" v-if="!isLoggedIn">
                        <a class="my-style-link-header nav-link text-light" :href="loginUrl">{{ 'Accedi' }}</a>
                    </li>
                    <li class="nav-item container-link-nav" v-if="!isLoggedIn && showRegisterLink">
                        <a class="my-style-link-header nav-link text-light" :href="registerUrl">{{ 'Dare lezioni' }}</a>
                    </li>
                    <!-- <li class="nav-item dropdown" v-if="isLoggedIn">
                        <a id="navbarDropdown" class="my-style-link-header name-font text-light nav-link dropdown-toggle"
                            href="#" role="button" @click="toggleDropdown">
                            {{ username }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" :class="{ show: isDropdownOpen }">
                            <a class="dropdown-item" :href="dashboardUrl">{{ 'Dashboard' }}</a>
                            <a class="dropdown-item" :href="messagesUrl">{{ 'Messaggi' }}</a>
                            <a class="dropdown-item" :href="reviewsUrl">{{ 'Recensioni' }}</a>
                            <a class="dropdown-item" href="">{{ 'Sponsorship' }}</a>
                            <a class="dropdown-item" href="">{{ 'Statistiche' }}</a>
                            <a class="dropdown-item" @click="logout">{{ 'Logout' }}</a>
                            <form id="logout-form" @submit.prevent="logout" class="d-none"></form>
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            isNavbarOpen: false,
            isDropdownOpen: false,
            isLoggedIn: false, // Replace with your logic for checking if the user is logged in
            username: '', // Replace with the user's name
            url: 'http://localhost:5173/',
            logoSrc: '/images/Bianco.png',
            homeUrl: 'http://localhost:5173/', // Replace with your home URL
            loginUrl: 'http://localhost:8000/login', // Replace with your login URL
            showRegisterLink: true, // Replace with your logic for showing/hiding the registration link
            registerUrl: 'http://localhost:8000/register', // Replace with your registration URL
            dashboardUrl: 'http://localhost:8000/dashboard', // Replace with your dashboard URL
        };
    },
    methods: {
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
    },
};
</script>

<style scoped style lang="scss">
@import "../../style.scss";

.bg-navbar {
    background-color: $color__primary !important;
}
.navbar {
    padding: 0.5rem;
    background-color: $color__primary;
    // height: $appheader__height;
    // border-bottom: 1px solid black;
    i {
        color: white;
    }

    .container-link-nav {
        a {
            padding: 0.5rem;
            transition: 0.5s;
        }
    }

    .my-padding {
        padding: 0.3rem ;
    }
}

.navbar-toggler {
    border: none;
    background-color: transparent;
    outline: none;
    box-shadow: none;
    i {
        font-size: 1.8rem;
    }
}
.navbar-toggler:focus {
    outline: none;
    box-shadow: none;
}
</style>