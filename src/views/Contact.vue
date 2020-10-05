<template>
  <div class="contact">
    <NavBar />
    <div class="row">
      <div class="col col-10 md-8 lg-6">
        <h2 class="title title-medium">{{$t("Contact.heading")}}</h2>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="submit"
          ref="contactForm"
        >
          <input type="hidden" name="form-name" value="contact" />
          <TextInput :name="$t('Contact.inputNames.name')" :label="$t('Contact.inputLabels.name')" :inputChanged="(newName) => name = newName" />
          <TextInput
            :name="$t('Contact.inputNames.email')"
            :label="$t('Contact.inputLabels.email')"
            :inputChanged="(newEmail) => email = newEmail"
          />
          <TextArea
            :name="$t('Contact.inputNames.message')"
            :label="$t('Contact.inputLabels.message')"
            :inputChanged="(newMessage) => message = newMessage"
          />
          <!--   <label for="message">Beskjed</label>
        <br />
        <input class="textarea" id="message" type="textarea" />
          <br />-->
          <button @click="() => $refs.contactForm.submit()">{{$t("Contact.button")}}*</button>
        </form>
         <p class="hint">*{{$t("Contact.hint1")}} <strong>{{$t("Contact.button")}}</strong> {{$t("Contact.hint2")}}.</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar";
import TextInput from "@/components/shared/UI/TextInput";
import TextArea from "@/components/shared/UI/TextArea";

export default {
  components: { NavBar, TextInput, TextArea },
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods:{
    submit(){
      console.log("form submitted")
    }
  }
};
</script>

<style scoped>
.contact {
  background-color: var(--color-dark);
  color: var(--color-light);
  width: 100%;
  height: 100vh;
}

form{
  margin-top: 5vh;
}
label {
  width: 100%;
  text-align: left;
}
input {
  border: none;
  outline: none;
  border-bottom: 1px solid var(--color-light);
  background-color: var(--color-dark);
  width: 100%;
  margin: 1em 0em;
}

button {
  background-color: var(--color-accent);
  border-radius: 39px;
  height: 3.5em;
  width: 150px;
  color: var(--color-light);
  font-weight: bold;
  border: none;
  margin: 1em;
}

.hint{
  color: var(--primary-color-dark);
  font-weight: normal;
  font-size: smaller;
}
</style>