<template>
  <div class="main">
    <div class="w-100"><input class="w-100" type="text" v-model.trim="mtitle" placeholder="Title"/></div>
    <div class="w-100"><textarea  class="w-100" v-model.trim="mdescription" placeholder="Description"></textarea></div>
    <div class="w-100">
      <select class="w-100" v-model="mstatus">
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
    </div>
    <div class="w-100"><input class="w-100" type="date" v-model="mdueDate" placeholder="Due Date"/></div>
    <div class="w-100"><button class="w-100" v-on:click="submit()">Add/Update</button></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

const clearedData = () => {
  return {
    mtitle: '',
    mdescription: '',
    mdueDate: null,
    mstatus: ''
  }
}

export default {
  name: 'Todo',
  props: {
    title: String,
    description: String,
    dueDate: String,
    status: String,
    index: Number,
  },
  data: function() {
    if(this.index < 0) {
      return clearedData();
    }
    return {
      mtitle: this.title,
      mdescription: this.description,
      mdueDate: this.dueDate,
      mstatus: this.status
    }
  },
  methods: {
    ...mapActions(['add', 'update']),
    clear: function() {
      this.mtitle = '';
      this.mdescription = '';
      this.mdueDate = null;
      this.mstatus = '';
    },
    submit: function () {
      if(this.index >= 0) {
        this.update({
          title: this.mtitle,
          description: this.mdescription,
          status: this.mstatus,
          dueDate: this.mdueDate,
        })
      } else {
        this.add({
          title: this.mtitle,
          description: this.mdescription,
          status: this.mstatus,
          dueDate: this.mdueDate,
        })
        this.clear();
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  margin-right: 4rem;
}
.w-100{
  width: 100%;
}
</style>
