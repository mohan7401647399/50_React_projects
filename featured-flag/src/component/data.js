const dummyApiResponse = {
    showTicTacToe: true,
    showGitHubProfileFinder: true,
    showSearchAutoCompleteApi: true
}

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500)
        else reject("Some error ! Please try again later")
    })
}

export default featureFlagsDataServiceCall