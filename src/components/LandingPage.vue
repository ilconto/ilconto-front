<template>
  <div>
    <p>
      <router-link :to="{name: 'create'}">Create a new board</router-link>
    </p>
    <p>Or</p>
    <p>
      <router-link :to="{name: 'login'}">Login to an existing one</router-link>
    </p>
  </div>
</template>
