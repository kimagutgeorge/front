<template>
        <div :class="['response-message', responseClass]" class="row position-absolute">{{ dbResponse }} <span class="text-primary">This here</span></div>
    <!-- response -->
    
    <div class="row dashboard categories">
        <div class="col-12 row">
            <div class="col-4 card">
                <h4 class="text-primary">Add Category</h4>
                <div class="form-group top-20">
                    <input type="text" v-model="category" placeholder="Category Name" class="form-control">
                </div>
                <div class="form-group top-20">
                    <button type="submit" class="btn btn-primary">SAVE <i class="fa-solid fa-save"></i></button>
                </div>
            </div>
            <div class="col-7 card">
                <table class="table" style="width:100%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                        </tr>
                        <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011-07-25</td>
                            <td>$170,750</td>
                        </tr>
                        <tr>
                            <td>Ashton Cox</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>2009-01-12</td>
                            <td>$86,000</td>
                        </tr>
                        <tr>
                            <td>Cedric Kelly</td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2012-03-29</td>
                            <td>$433,060</td>
                        </tr>
                        <tr>
                            <td>Airi Satou</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td>2008-11-28</td>
                            <td>$162,700</td>
                        </tr>
                        <tr>
                            <td>Brielle Williamson</td>
                            <td>Integration Specialist</td>
                            <td>New York</td>
                            <td>61</td>
                            <td>2012-12-02</td>
                            <td>$372,000</td>
                        </tr>
                        <tr>
                            <td>Herrod Chandler</td>
                            <td>Sales Assistant</td>
                            <td>San Francisco</td>
                            <td>59</td>
                            <td>2012-08-06</td>
                            <td>$137,500</td>
                        </tr>
                        <tr>
                            <td>Rhona Davidson</td>
                            <td>Integration Specialist</td>
                            <td>Tokyo</td>
                            <td>55</td>
                            <td>2010-10-14</td>
                            <td>$327,900</td>
                        </tr>
                        <tr>
                            <td>Colleen Hurst</td>
                            <td>Javascript Developer</td>
                            <td>San Francisco</td>
                            <td>39</td>
                            <td>2009-09-15</td>
                            <td>$205,500</td>
                        </tr>
                        <tr>
                            <td>Sonya Frost</td>
                            <td>Software Engineer</td>
                            <td>Edinburgh</td>
                            <td>23</td>
                            <td>2008-12-13</td>
                            <td>$103,600</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
           
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
name: 'Categories',
components: { },
data() {
    return {
      category: '',
      dbResponse: '',
      responseClass: '', // Class to apply based on response
    };
  },
  methods: {
    async addCategory() {
      try {
        const response = await axios.post('http://localhost:5000/add-cat', {
          category: this.category
        });

        const data = response.data;

        if (data.message === '1') {
            this.responseClass = 'bg-danger text-white'
            this.dbResponse = 'Added Successfully'

        } else {
          this.responseClass = 'bg-danger text-white'
          this.dbResponse = 'Failed'
        }
      } catch (error) {
        this.responseClass = 'bg-danger text-white'
        this.dbResponse = 'Failed. Please try again later.'
        if (error.response) {
          this.dbResponse = error.response.data.message;
        }
      }
    }
  }
}
</script>