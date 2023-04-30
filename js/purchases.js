// // get all objects in local storage


// Main
window.onload = () => {
  const purchases = JSON.parse(document.cookie);
  for(let i=0; i< purchases.length; i++) {
    document.getElementById("purchasesItems").innerHTML += '<div class="col-md-10"> ' +
                                  '<div class="box"> ' +
                                              '<div class="img-box"> ' +
                                                '<img src="images/b1.jpg" alt=""> ' +
                                                  '<h4 class="blog_date" > ' +
                                                  '<span> ' +
                                                    '21 July 2007 ' +
                                                      '</span> ' +
                                                    ' </h4> ' +
                                                  ' </div> ' +
                                                ' <div class="detail-box"> ' +
                                                ' <h5> ' +
                                                  `${purchases[i].book}` +
                                                  ' </h5> ' +
                                                  ' <p> ' +
                                                  '    <div class="row"> ' +
                                                  '      <div class="col-md-12"> ' +
                                                  '        <h7 style="color: rgb(75, 75, 78);"> ' +
                                                  '            Author: <strong style="color: rgba(188, 159, 138, 0.753);">'+`${purchases[i].author}`+'</strong> ' +
                                                  '        </h7> ' +
                                                  '      </div> ' +
                                                  '    </div> ' +
                                                  '    <div class="row"> ' +
                                                  '        <div class="col-md-12"> ' +
                                                  '          <h7 style="color: rgb(75, 75, 78);"> ' +
                                                  '              Genre: <strong style="color: rgba(188, 159, 138, 0.753);">'+`${purchases[i].genre}`+'</strong> ' +
                                                  '          </h7> ' +
                                                  '        </div> ' +
                                                  '      </div> ' +
                                                  '    <div class="row"> ' +
                                                  '        <div class="col-md-10"> ' +
                                                  '            <h7 style="color: rgb(75, 75, 78);"> ' +
                                                  '                Pages: <strong style="color: rgba(188, 159, 138, 0.753);">'+`${purchases[i].pages}`+'</strong> ' +
                                                  '            </h7>  ' +
                                                  '        </div> ' +
                                                  '    <div class="row"> ' +
                                                  '        <div class="col-md-10"> ' +
                                                  '            <h7 style="color: rgb(50, 50, 50);"> ' +
                                                  '                Copies: <strong style="color: rgba(188, 159, 138, 0.753);">'+`${purchases[i].copies}`+'</strong> ' +
                                                  '                <br/>Cost: <strong style="color: rgba(188, 159, 138, 0.753);">'+`${parseInt(purchases[i].price) * parseInt(purchases[i].copies)}`+'</strong> ' +
                                                  '            </h7>  ' +
                                                  '        </div> ' +
                                                  '    </div> ' +
                                                  '</p> ' +
                                                  '</div> ' +
                                  '</div> ' +
                              '</div> ';
  }
};