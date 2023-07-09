<template>
  <div class="w-full">
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="flex items-center justify-between px-6 py-4 border-b">
        <div>
          <span class="text-lg font-bold text-gray-800">{{ month }}</span>
          <span class="ml-1 text-lg text-gray-600 font-normal">{{ year }}</span>
        </div>
        <div>
          <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
            Previous
          </button>
          <button type="button" class="ml-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
            Next
          </button>
        </div>
      </div>

      <div class="flex flex-wrap p-6">
        <div v-for="day in days" class="w-1/7">
          <div class="text-sm font-medium text-gray-800">{{ day }}</div>
        </div>
        <div v-for="blank in blanks" class="w-1/7"></div>
        <div v-for="date in getDaysInMonth()" class="w-1/7">
          <div class="p-1 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-100 cursor-pointer">{{ date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
  },
  computed: {
    days() {
      return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    },
    blanks() {
      const date = new Date(`${this.month} 1, ${this.year}`);
      const dayOfWeek = date.getDay();
      return Array(dayOfWeek)
        .fill()
        .map((_, index) => index + 1);
    },
  },
  methods: {
    getDaysInMonth() {
      const daysInMonth = new Date(this.year, this.getMonthIndex() + 1, 0).getDate();
      return Array(daysInMonth)
        .fill()
        .map((_, index) => index + 1);
    },
    getMonthIndex() {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return monthNames.indexOf(this.month);
    },
  },
};
</script>
