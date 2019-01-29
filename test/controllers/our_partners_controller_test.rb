require 'test_helper'

class OurPartnersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get our_partners_index_url
    assert_response :success
  end

end
