<template>
  <el-container>
    <el-aside width="300px"></el-aside>
    <el-container>
      <el-header><base-header /></el-header>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "base-wrapper",
  created() {
    fetch('http://localhost:3000/lalallala', {
      method: "GET"
    }).then(res => console.log(res))
  }
}
</script>


<style scoped lang="scss">

</style>
