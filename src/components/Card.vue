<template>
  <div class="card">
    <div class="title">
      <span>Interior Lightning Service</span>
      <span class="orange"
        >Service description

        <i class="el-icon-arrow-right"></i>
      </span>
    </div>
    <div class="main">
      <div class="left">
        <div>
          <div class="inlineBlock">
            <div class="gray">Contact Name:</div>
            <div>Tom Bruce</div>
          </div>
          <div class="inlineBlock ml20">
            <div class="gray">Contact Number:</div>
            <div>0488 888 888</div>
          </div>
        </div>
        <div class="mt20">
          <div class="gray">Service Address:</div>
          <div>12 West St Canley Vale Nsw 2166</div>
        </div>
        <div class="mt20">
          <div class="gray">Service Time:</div>
          <div>Morning 8 AM-11Am, 11 December 2019</div>
        </div>
      </div>
      <div class="right">
        <div>
          <div class="orange">Full Refund</div>
          <div>
            Amount Paid
            <el-tooltip effect="dark" content="notice" placement="left">
              <span class="questionColor">
                <i class="el-icon-question"></i>
              </span>
            </el-tooltip>
          </div>
          <div>$50</div>
        </div>
        <div class="mt20">
          <div>
            Refunded:
            <el-tooltip effect="dark" content="notice" placement="left">
              <span class="questionColor">
                <i class="el-icon-question"></i>
              </span>
            </el-tooltip>
          </div>
          <div>$50</div>
        </div>
      </div>
    </div>
    <div class="footer">
      Booking Canceled
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped lang="scss">
.card {
  background-color: #fff;
}
.inlineBlock {
  display: inline-block;
}

.ml20 {
  margin-left: 20px;
}

.mt20 {
  margin-top: 20px;
}

.gray {
  color: #c6c6c6;
}

.orange {
  color: #d9a671;
}

.questionColor {
  color: #7d7a7a;
}

.card {
  /*width: 500px;*/
  padding: 20px 20px 30px;
  box-shadow: 0 0 6px 6px #f3ecec;

  .title {
    display: flex;
    line-height: 40px;
    justify-content: space-between;
    border-bottom: 1px solid #f3f3f3;

    span:nth-child(1) {
      font-weight: bold;
      font-size: 20px;
    }

    span:nth-child(2) {
      cursor: pointer;
    }
  }
  .main {
    padding: 20px 0;
    display: flex;
    border-bottom: 5px solid #dfdfdf;
    justify-content: space-between;

    .left {
      & > div {
        div:nth-child(2) {
          line-height: 20px;
        }
      }
    }

    .right {
      border-left: 1px solid #e5e5e5;
      padding-left: 30px;
      font-size: 18px;

      .question {
        width: 15px;
        height: 15px;
      }
    }
  }
  .footer {
    text-align: right;
    margin-top: 5px;
  }
}
</style>
