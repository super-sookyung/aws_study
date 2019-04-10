import Api from '@/services/Api'

export default {
  posttest (data) {
    return Api().post('posttest', data)
  }
}
