<template>
  <div id="profile">
    <div class="row gutters-sm">
      <div class="d-flex flex-column align-items-center col-md-12 mb-4 mt-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
              <img
                src="../assets/87-512.png"
                alt="user profile"
                class="rounded-circle"
                width="150"
              />
              <div class="mt-3">
                <h4>John Doe</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-12 text-secondary">fip@jukmuh.al</div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-12">
                <h5 class="mb-0">Présentation</h5>
                <p class="col-sm-12 text-center">
                  Bonjour, super idée d'appli ! Ravi de me joindre à vous.
                  blablabla blabla blablabla
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <a
              class="btn btn-info"
              target="__blank"
              href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
              >Edit</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Profile",
  components: {},
};
</script>

<style scoped>
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}
.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}
.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}
.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>