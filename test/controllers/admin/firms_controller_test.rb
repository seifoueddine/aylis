require 'test_helper'

class Admin::FirmsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_firm = admin_firms(:one)
  end

  test "should get index" do
    get admin_firms_url
    assert_response :success
  end

  test "should get new" do
    get new_admin_firm_url
    assert_response :success
  end

  test "should create admin_firm" do
    assert_difference('Admin::Firm.count') do
      post admin_firms_url, params: { admin_firm: {  } }
    end

    assert_redirected_to admin_firm_url(Admin::Firm.last)
  end

  test "should show admin_firm" do
    get admin_firm_url(@admin_firm)
    assert_response :success
  end

  test "should get edit" do
    get edit_admin_firm_url(@admin_firm)
    assert_response :success
  end

  test "should update admin_firm" do
    patch admin_firm_url(@admin_firm), params: { admin_firm: {  } }
    assert_redirected_to admin_firm_url(@admin_firm)
  end

  test "should destroy admin_firm" do
    assert_difference('Admin::Firm.count', -1) do
      delete admin_firm_url(@admin_firm)
    end

    assert_redirected_to admin_firms_url
  end
end
