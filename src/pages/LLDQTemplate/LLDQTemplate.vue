<template>
  <div style="overflow-y: auto;position: relative; font-size: 12px">
    <div class="action">
      <v-btn @click="renderDoc()">Tai pdf</v-btn>
      <v-btn color="primary" @click="alert('saved')">Lưu</v-btn>
      <v-btn color="warning" @click="$router.push({ name: 'list-page' })"
        >Trở về</v-btn
      >
    </div>

    <div class="row v-row" style="margin-top: 4rem">
      <div class="col-12 col-md-4">
        <v-card class="v-card">
          <v-text-field dense label="Họ tên và tên khai sinh"></v-text-field>
          <v-text-field
            dense
            label="Họ và tên thường dùng hay tên riêng (nếu có)"
          ></v-text-field>
          <v-text-field dense label="Ngày sinh"></v-text-field>
          <v-text-field dense label="Sinh quán"></v-text-field>
          <v-text-field dense label="Giấy CMND số"></v-text-field>
          <v-text-field dense label="Ngày cấp CMND"></v-text-field>
          <v-text-field dense label="Hộ khẩu thường trú"></v-text-field>
          <v-text-field dense label="Nơi ở của bản thân"></v-text-field>
        </v-card>
      </div>

      <div class="col-12 col-md-4">
        <v-card class="v-card">
          <v-text-field dense label="Chiếu cao"></v-text-field>
          <v-text-field dense label="Cân nặng"></v-text-field>
          <v-text-field dense label="Số điện thoại di động"></v-text-field>
          <v-text-field dense label="Trình độ học vấn"></v-text-field>
          <v-text-field dense label="Nghề nghiệp"></v-text-field>
          <v-text-field dense label="Lương"></v-text-field>
          <v-text-field dense label="Bậc lương"></v-text-field>
          <v-text-field dense label="Nơi làm việc (học tập)"></v-text-field>
        </v-card>
      </div>
      <div class="col-12 col-md-4">
        <v-card class="v-card">
          <v-text-field dense label="Thành phần bản thân"></v-text-field>
          <v-text-field dense label="Tôn giáo"></v-text-field>
          <v-text-field dense label="Dân tộc"></v-text-field>
          <v-text-field
            dense
            label="Ngày vào Đoàn TNCS Hồ Chí Minh"
          ></v-text-field>
          <v-text-field
            dense
            label="Nơi vào Đoàn TNCS Hồ Chí Minh"
          ></v-text-field>
          <v-text-field dense label="Ngày vào Đảng CSVN"></v-text-field>
          <v-text-field dense label="Chính thức"></v-text-field>
          <v-text-field dense label="Trình độ lý luận chính trị"></v-text-field>
        </v-card>
      </div>
    </div>
    <div class="row v-row">
      <div class="col-12 col-md-3">
        <v-card class="v-card">
          <v-text-field dense label="Họ tên cha"></v-text-field>
          <v-text-field dense label="Ngày sinh"></v-text-field>
          <v-text-field dense label="Nghề nghiệp"></v-text-field>
        </v-card>
      </div>

      <div class="col-12 col-md-3">
        <v-card class="v-card">
          <v-text-field dense label="Họ tên mẹ"></v-text-field>
          <v-text-field dense label="Ngày sinh"></v-text-field>
          <v-text-field dense label="Nghề nghiệp"></v-text-field>
        </v-card>
      </div>
      <div class="col-12 col-md-3">
        <v-card class="v-card">
          <v-text-field
            dense
            label="Nơi ở của gia đình (cha, mẹ)"
          ></v-text-field>
          <v-text-field dense label="Thành phần gia đình"></v-text-field>
        </v-card>
      </div>
      <div class="col-12 col-md-3">
        <v-card class="v-card">
          <v-text-field dense label="Họ và tên vợ (chồng)"></v-text-field>
          <v-text-field dense label="Ngày sinh"></v-text-field>
          <v-text-field dense label="Nghề nghiệp"></v-text-field>
          <v-text-field dense label="Mấy con"></v-text-field>
        </v-card>
      </div>
    </div>

    <v-card
      class="v-card"
      style="margin: 15px; padding-top: 10px; padding-bottom: 5px"
    >
      <v-card-title style="word-break: break-word"
        ><b
          >Tình hình kính tế, chính trị (ghi rõ họ tên, tuổi, nghề nghiệp, nơi
          ở, tình hình kinh tế chính trị qua các thời kỳ):</b
        ></v-card-title
      >
      <v-card-subtitle
        ><b><i>- Cha, mẹ, anh, chị, em ruột:</i></b></v-card-subtitle
      >
      <v-textarea outlined></v-textarea>
      <hr />
      <v-card-subtitle
        ><b><i>- Cha, mẹ, anh, chị, em vợ (chồng):</i></b></v-card-subtitle
      >
      <v-textarea outlined></v-textarea>
      <hr />
      <v-card-subtitle
        ><b><i>- Vợ (chồng) và các con:</i></b></v-card-subtitle
      >
      <v-textarea outlined></v-textarea>
    </v-card>

    <v-card
      class="v-card"
      style="margin: 15px; padding-top: 10px; padding-bottom: 5px"
    >
      <v-card-title style="word-break: break-word"
        ><b
          >Tình hình kinh tế, chính trị; quá trình công tác của bản thân (ghi rõ
          nghề nghiệp, nơi ở; tình hình kinh tế chính trị qua các giai đoạn, từ
          6 đến 11 tuổi, từ 12 đến 15 tuổi, từ 16 đến 18 tuổi và từ 18 tuổi đến
          nay):</b
        ></v-card-title
      >
      <v-textarea outlined></v-textarea>
    </v-card>

    <v-card
      class="v-card"
      style="margin: 15px; padding-top: 10px; padding-bottom: 5px"
    >
      <v-card-title style="word-break: break-word"
        ><b
          >Nghề nghiệp, chuyên môn kỹ thuật, nghiệp vụ, trình độ quân sự (nếu
          có)</b
        ><v-spacer></v-spacer
        ><v-switch color="primary" v-model="dialog"></v-switch
      ></v-card-title>
      <div v-show="dialog">
        <v-textarea outlined></v-textarea>
        <v-text-field dense label="Ngày nhập ngũ"></v-text-field>
        <v-text-field dense label="Ngày xuất ngũ"></v-text-field>
        <v-text-field dense label="Cấp bậc, chức vụ và đơn vị"></v-text-field>
        <v-text-field
          dense
          label="Chuyên môn, kỹ thuật, nghiệp vụ được đào tạo:"
        ></v-text-field>
        <v-text-field dense label="Nghề nghiệp"></v-text-field>
        <v-text-field
          dense
          label="Đã xếp và đơn vị Dự bị đông viên (cấp bậc, chức vụ và đơn vị)"
        ></v-text-field>
      </div>
    </v-card>

    <v-card
      class="v-card"
      style="margin: 15px; padding-top: 10px; padding-bottom: 5px"
    >
      <v-card-title style="word-break: break-word"
        ><b
          >Nhận xét và kết luận của chính quyền cơ sở (về lại lịch chính trị, về
          chấp hành đường lối, chủ trương, chính sách của Đảng, pháp luật của
          Nhà nước, về tham gia các phong trào của địa phương).</b
        >
        <v-spacer> </v-spacer
        ><v-switch color="primary" v-model="dialog2"></v-switch>
      </v-card-title>
      <v-textarea v-show="dialog2" outlined></v-textarea>
    </v-card>
  </div>
</template>
<script>
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}
import apiConfig from "../../API/api.json";
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      lldq: {
        fullname: "",
        nickname: "",
        date_1: { d: "", m: "", y: "" },
        cmnd: "",
        d_cmnd: "",
        height: "",
        weight: "",
        permanent_residence: "",
        address: "",
        nation: "",
        religion: "",
        yourselves: "",
        education: "",
        job: "",
        salary: "",
        bac: "",
        workplace: "",
        dmy1: "",
        Doanplace: "",
        dmy2: "",
        Dang_ct: "",
        ct_level: "",
        phone: "",
        person_2: { name: "", date: { d: "", m: "", y: "" }, job: "" },
        person_3: { name: "", date: { d: "", m: "", y: "" }, job: "" },
        family_address: "",
        tpgd: "",
        person_4: {
          name: "",
          date: { d: "", m: "", y: "" },
          job: "",
          children_cnt: 0,
        },
        date_5: { d: "", m: "", y: "", t: "" },
        date_6: { d: "", m: "", y: "", t: "" },
        date_7: { d: "", m: "", y: "", t: "" },
        text_1: "",
        text_2: "",
        text_3: "",
        text_4: "",
        text_5: "",
        text_6: "",
        text_7: "",
        text_8: "",
        text_9: "",
      },
    };
  },
  methods: {
    renderDoc() {
      loadFile(`${apiConfig.baseURL}/lldq.docx`, function (error, content) {
        if (error) {
          throw error;
        }
        var zip = new PizZip(content);
        var doc = new Docxtemplater(zip);
        doc.setData({
          first_name: "John",
        });
        doc.render();
        var out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }); //Output the document using Data-URI
        saveAs(out, "output.docx");
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.v-card {
  padding: 35px 10px 10px 10px;
}
.v-row {
  &:first-child {
    margin-top: 10rem !important;
  }
  margin: 1.5rem 0;
  input {
    font-size: 14pt !important;
  }
}
.action {
  z-index: 2;
  width: auto;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 5px;
  margin-bottom: 1rem;
  background-image: url('../../assets/nav.jpg');
  padding: 15px 25px;
  button {
    margin-left: 1rem;
  }
}

.template-a4 {
  margin: 0 auto;
  padding: 1.27cm 1.75cm 2cm 2.75cm;
  width: 21cm;
  color: #000;
  // height: 29.7cm;
  position: relative;
  line-height: 13pt;
  font-family: Times New Roman;
}

.mini-square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 24px;
  margin-left: auto;
  margin-right: -1.5cm;
  font-size: 8pt;
  padding: 0px 15px;
  // transform: translateY(-50%);
  border: 1px solid #000;
}

.h1 {
  font-size: 13pt;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
.underline {
  transform: rotate(180deg);
}
</style>