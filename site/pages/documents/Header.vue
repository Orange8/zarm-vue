<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <a href="#/">ZARM-VUE</a>
      </div>
      <div class="search">
        
      </div>
      <div class="version">
        
      </div>
      <nav>
        <ul>
          <li><a href="#/">首页</a></li>
          <li><a href="#/documents/quick-start">文档</a></li>
          <li><a href="https://github.com/ZhonganTechENG/zarm" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li>
            <el-select v-model="value" placeholder="请选择" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: ''
    };
  },
  created() {
    const { version, versionList } = this.$store.state;
    this.options = versionList;
    this.value = version;
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 65px;
  background-color: #fff;

  .header-container {
    width: 100%;
    height: 100%;
  }

  .logo {
    float: left;
    width: 280px;
    height: 100%;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  
    a {
      display: block;
      height: 65px;
      line-height: 65px;
      color: #333;
      text-decoration: none;
    }
  }
  
  .search {
    float: left;
    margin-top: 19px;
    margin-left: 20px;
  
    .tag-input-box {
      width: 200px;
      border: 0;
  
      &-active {
        box-shadow: none;
      }
  
      > .ui-icon {
        display: none;
      }
  
      > .input-div-placeholder,
      > .value-text {
        font-size: 14px;
      }
    }
  }

  .version {
    float: right;
    height: 65px;
    line-height: 65px;
    margin-right: 125px;

    .tag-input-box {
      width: 130px;
      background: #fff;

      &:hover {
        border-color: #12C287;
      }
      &-active {
        border-color: #12C287;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(18, 194, 135, 0.6);
      }
    }
  }

  nav {
    float: right;
    height: 65px;
    line-height: 65px;
    margin-right: 100px;
  
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
  
      li {
        float: left;
        text-align: center;
        font-size: 16px;
        color: #999;
  
        a {
          display: block;
          color: #333;
          cursor: pointer;
    
          &.active,
          &:hover {
            color: #12C287;
          }
        }
  
        svg {
          height: 20px;
          margin-right: 6px;
        }
      }
    }
  }
}

.ui-option-list {
  &:hover,
  &.checked {
    color: #333;
    background: rgba(18, 194, 135, .1);

    .ui-icon.theme-info {
      color: #12C287;
    }
  }
}

@media only screen and (max-width: 767.99px) {
  header {
    &-container {
      margin: 0 auto;
    }

    .logo {
      width: 100%;
    }

    .search,
    .version,
    nav {
      display: none;
    }
  }
}
</style>
