var profileStates = {
  editProfile: false,
  changePassword: false,
  showDetails:true
}

$('.tabs').on('click', function(e) {
  e.stopPropagation();
  tabHandler(e.currentTarget);
})

$('.cancel').on('click', function(e) {
  e.stopPropagation();
  e.preventDefault();
  pageReset();
});

function tabHandler(tab){
  var editProfileTab = $(tab).hasClass('edit-profile');
  var editEmailTab = $(tab).hasClass('edit-email');
  /**/var additionalInfoTab = $(tab).hasClass('additional-info');
  var changePassTab = $(tab).hasClass('change-password');

  switch (true) {



    // if Tab is Edit Profile and Edit Profile is not showing
    case (editProfileTab && !isEditProfileShowing()):
      // Check to see if Profile Details are showing. Hide if they are.
      if (isDetailsShowing()) {
        profileStates.showDetails = false;
        $('.student-details').removeClass('expanded');
      }

      // Remove .expanded from all content wrappers
      $('.tab-content').removeClass('expanded');

      // Add .expanded to edit profile content wrapper
      $('.edit-profile-form-wrap').addClass('expanded');

      profileStates.editProfile = true;
      profileStates.editEmail = false;
      profileStates.additionalInfo = false;
      profileStates.changePassword = false;
      break;



      // if Tab is Edit email and Edit email is not showing
      case (editEmailTab && !isEditEmailShowing()):
        // Check to see if Profile Details are showing. Hide if they are.
        if (isDetailsShowing()) {
          profileStates.showDetails = false;
          $('.student-details').removeClass('expanded');
        }

        // Remove .expanded from all content wrappers
        $('.tab-content').removeClass('expanded');

        // Add .expanded to edit profile content wrapper
        $('.edit-email-form-wrap').addClass('expanded');

        profileStates.editProfile = false;
        profileStates.editEmail = true;
        profileStates.additionalInfo = false;
        profileStates.changePassword = false;
        break;




   ////// if Tab is additional info and additional info is not showing
    case (additionalInfoTab && !isAdditionalInfoShowing()):
      // Check to see if Profile Details are showing. Hide if they are.
      if (isDetailsShowing()) {
        profileStates.showDetails = false;
        $('.student-details').removeClass('expanded');
      }

      // Remove .expanded from all content wrappers
      $('.tab-content').removeClass('expanded');

      // Add .expanded to edit profile content wrapper
      $('.additional-info-wrap').addClass('expanded');

      profileStates.editProfile = false;
      profileStates.editEmail = false;
      profileStates.additionalInfo = true;
      profileStates.changePassword = false;
      break;







    // if Tab is Change Password and Detail is Showing
    case (changePassTab && !isChangePasswordShowing()):
      // Check to see if Profile Details are showing. Hide if they are.
      if (isDetailsShowing()) {
        profileStates.showDetails = false;
        $('.student-details').removeClass('expanded');
      }

      // Remove .expanded from all content wrappers
      $('.tab-content').removeClass('expanded');

      // Add .expanded to edit profile content wrapper
      $('.change-password-form-wrap').addClass('expanded');
      profileStates.editProfile = false;
      profileStates.editEmail = false;
      profileStates.additionalInfo = false;
      profileStates.changePassword = true;
      break;



    // if Tab is Edit Profile and Edit Profile is Showing
    case (editProfileTab && isEditProfileShowing()):
      pageReset();
      break;

////// if Tab is edit email Profile is Showing
  case (editEmailTab && isEditEmailShowing()):
    pageReset();
    break;

  ////// if Tab is additional info and Edit Profile is Showing
    case (additionalInfoTab && isAdditionalInfoShowing()):
      pageReset();
      break;


    // if Tab is Change Password and Change Password is Shwoing
    case (changePassTab && isChangePasswordShowing()):
      pageReset();
      break;
  }
}

// Reset page to default state
function pageReset() {
  $('.tab-content').removeClass('expanded');
  $('.student-details').addClass('expanded');
  profileStates.showDetails = true;
  profileStates.editProfile = false;
  profileStates.editEmail = false;
  profileStates.additionalInfo = false;
  profileStates.changePassword = false;
}

// Check to see if Student Details are being shown
function isDetailsShowing() {
  return profileStates.showDetails;
}

// Check to see if Change Password form is showing
function isChangePasswordShowing() {
  return profileStates.changePassword;
}



// Check to see if additional info is showing
function isAdditionalInfoShowing() {
  return profileStates.additionalInfo;
}


// Check to see if edit email is showing
function isEditEmailShowing() {
  return profileStates.editEmail;
}



// Check to see if Edit Profil form is showing
function isEditProfileShowing() {
  return profileStates.editProfile;
}
