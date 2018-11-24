import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  RMresponse1 = "<h3>Professional RM Solution </h3><br>\
<ol>\
<li> Client uses the land property as mortgage to get 20 million loan approval. With the interest rate of 7.8%, the interest is 1.56 million. Therefore, the client has the sufficient fund for project investment.\
<li> Client makes a 300 million deposit. The deposit period is 1 year; the annual rate of return is 3.3%. Therefore, the income of return is 0.99 million.\
<li> Client uses the 300 million deposit as mortgage to apply for a 300 million loan with the period of 1 year. The interest rate is 6%, the interest is 1.8 million. \
</ol><br>\
<h4>Comments</h4><br>\
<ol>\
<li> The available asset of client is: 20 million – 30 million + 30 million, which meets the clients’ need for investment.\
<li> The interest cost of client: 1.56 million – 0.99 million + 1.8 million = 2.37 million. The fund cost is: 2.37 million /200 million = 11.85%.\
<li> Note that this loan rate in first step is actually lower than common cases, this is a trade-off for the next two steps in order to increase the deposit in this bank. This solution requires negotiation between RM and client.\
<li> Also, the rate of loan is lower in step 3 than step 1, because loan mortgaged with 100% deposit is considered to have lower risk.\
<li> This approach further improves the relationship between the client and bank as this is a win-win scenario where client can get loan more easily in the future, and the bank gains deposit.\
<li> This case is more of partner client one instead of individual one.\
</ol>";

RMresponse2 = "<h3>Professional RM Solution </h3><br>\
<ol>\
<li> Field investigation of products in bank A: bank A launched a product with 220-days period and annual rate of return as 5.8%. Bank B has a competitive product with one-year period, 5.8% and half-year period, 5.7%. Clearly, the best solution for this client is to purchase both the half-year and one-year product at bank B in order to satisfy his requirement of higher rate of return as well as financial liquidity.\
<li> Client is not persuaded in this stage, because he thinks the half-year period is longer than 220-days and the rate of return is the same. RM further analyses the trend of recent macroeconomics and currency, several conclusions are drawn: 1) there is a trend that banks are lowering the rate of return given the loose financial environment; 2) therefore, investing in product with longer period at the moment is more profitabl. \
<li> A benefit along with the bank B’s product further convince the client to switch its asset: if client requires loan during the one-year period, this product can be used as mortgage. This benefit answers the client requirement of financial liquidity.\
<li> Comprehensively, bank B’s product is better than bank A’s product. \
</ol><br>\
<h4>Comments</h4><br>\
<ol>\
<li>This case focuses on the competitive products comparison.\
<li>A mature RM referred to external environment and searched for clients needs to do the negotiation.\
</ol>";

responseString = "<h3>Your Response:</h3><br>"

openCase(evt, caseNum) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabcontent.length; i++){
        let elt = tabcontent[i] as HTMLElement;
        elt.style.display = "none";}
    for (var i = 0; i < tablinks.length; i++)
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    document.getElementById(caseNum).style.display = "block";
    evt.currentTarget.className += " active";
}

resetAllFields() {
    document.getElementById("solution1").classList.remove("success");
    document.getElementById("solution1").classList.remove("failure");
    document.getElementById("solution2").classList.remove("success");
    document.getElementById("solution2").classList.remove("failure");
    document.getElementById("analyze1").style.display = "none";
    document.getElementById("analyze2").style.display = "none";
}

showSims(numCase, id, ans) {
    document.getElementById(id).style.display = "block";
    document.getElementById(id).innerHTML = this.responseString + ans; // + termUseScore
}

  showSolution(caseNum) {
    var ans1 = document.getElementById("ans1").value;
    switch (caseNum) {
        case 1:
            var ans1 = document.getElementById("ans1").value;
            document.getElementById("solution1").style.display = "block";
            if (ans1 === "") {
                this.resetAllFields();
                document.getElementById("solution1").classList.add("failure");
                document.getElementById("solution1").innerHTML = "\
                <strong>Please enter in a response!</strong>"
                return;
            } else if (ans1.length < 100) {
                this.resetAllFields();
                document.getElementById("solution1").classList.add("failure");
                document.getElementById("solution1").innerHTML = "\
                <strong>Please enter a longer response!</strong>"
                return;
            } else {
                this.resetAllFields();
                document.getElementById("solution1").classList.add("success");
                document.getElementById("solution1").innerHTML = this.RMresponse1;
                this.showSims(1, "analyze1", ans1)
            }
            break;
        case 2:
            var ans2 = document.getElementById("ans2").value;
            document.getElementById("solution2").style.display = "block";
            if (ans2 === "") {
                this.resetAllFields();
                document.getElementById("solution2").classList.add("failure");
                document.getElementById("solution2").innerHTML = "\
                <strong>Please enter in a response!</strong>"
                return;
            } else if (ans2.length < 100) {
                this.resetAllFields();
                document.getElementById("solution2").classList.add("failure");
                document.getElementById("solution2").innerHTML = "\
                <strong>Please enter a longer response!</strong>"
                return;
            } else {
                this.resetAllFields();
                document.getElementById("solution2").classList.add("success");
                document.getElementById("solution2").innerHTML = this.RMresponse2;
                this.showSims(2, "analyze2", ans2)
            }
            break;
    }
}

}
