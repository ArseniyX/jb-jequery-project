const Card = ({ name, id }, index) => `
      <div class="card mt-4" style="width: 21.5rem; flex: none;" id=${id}>
       <div class="card-body">
        <div class="header-card__container">
         <h5 class="card-title">${id}</h5> 
         <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
         </label>
        </div>
        <p>
        <p class="card-text">${name}</p>
        <button type="button" class="btn btn-primary mt-3" data-name="${name}" data-id="${id}"
        data-toggle="collapse" data-target="#id-${index}" aria-expanded="false" aria-controls="id-${index}"
        >More info</button>
        <div class="collapse" id="id-${index}">
        <div class="card card-body mt-3">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
        
      </div>
       </div>
       
      </div>`;

export default Card;
