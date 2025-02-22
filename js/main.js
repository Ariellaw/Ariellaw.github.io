function initPage () {
  renderProjs()
}

function renderProjs () {
  var elPortfolioContainer = document.querySelector('#portfolio-container')
  var isHidden
  var strHtmlPreviews = ''

  for (var i = 0; i < gProjs.length; i++) {
    var proj = gProjs[i]
    proj.underConstruction ? (isHidden = '') : (isHidden = 'notDisplayed')

    strHtmlPreviews += `
    <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${proj.id}')">
    <img class="img-fluid construction-img  ${isHidden}" id="f" src='../img/portfolio/banner.png' alt="">
    <a class="portfolio-link" href=${proj.link}  >
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid img-size" src=${proj.imgUrl} alt="">
    </a>
    <div class="portfolio-caption">
     <a target="_blank" href=${proj.link}><h4>${proj.name}</h4></a>
      <a  target="_blank" data-toggle="modal" href="#portfolioModal"><p class="text-muted">More info</p></a>
      <p class="red ${isHidden}" id="k">(Under Construction)</p>
    </div>
    <img class="img-fluid construction-img  ${isHidden}" id="f" src='../img/portfolio/banner.png' alt="">
  </div>`
  }
  elPortfolioContainer.innerHTML = strHtmlPreviews
}
function findProjIdx (projId) {
  var projIdx = gProjs.findIndex(function (proj) {
    return proj.id === projId
  })
  return projIdx
}
function renderModal (projId) {
  var projIdx = findProjIdx(projId)
  var proj = gProjs[projIdx]
  var elModalsContainer = document.querySelector('.modal-body')

  var strHtmlModals = `<h2> ${proj.name}</h2>
        <img class="img-fluid d-block mx-auto" id="project_img" src=${proj.imgUrl} alt="">
        <p id="project_description">${proj.description}</p>
        <ul id="project_info" class="list-inline">
          <li>Framework: ${proj.framework}</li>
          <li>Link to project: <a target="_blank" href=${proj.link}>${proj.name}</a> </li> 
  <li><a target="_blank" href=${proj.linkToGithub}>Link to Github</a></li>
  </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
          <i class="fa fa-times"></i>
          Close Project</button>`
  elModalsContainer.innerHTML = strHtmlModals
}
