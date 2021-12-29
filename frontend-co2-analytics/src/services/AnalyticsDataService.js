import http from "../http-common"

class AnalyticsDataService {
    findAllByDate(params){
        return http.get("/shipments/", {params})
    }
}

export default new AnalyticsDataService()