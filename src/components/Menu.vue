/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

<template>
  <div class="nav">
    <div class="name">order management system</div>
  </div>
</template>

<script>
import { Auth, Hub } from 'aws-amplify';
import AmplifyStore from '../store/store';


export default {
  name: 'Menu',
  data () {
    return {}
  },
  computed: {
    user() {
      return AmplifyStore.state.user
    }
  },
  methods: {
    home: function() {
        this.$router.push('/')
    },
    notes: function() {
        this.$router.push('/notes')
    },
    profile: function() {
        this.$router.push('/profile')
    },
    signOut: function() {
        this.$router.push('/auth/signOut')
    }
  }
}
</script>
<style>
  .name{
    font-size: 20px;
  }
</style>


