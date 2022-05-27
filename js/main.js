var CONTRACT_ADDRESS = "0x7a336c166Dd0Aa6e69AE212E0052E97035DFf825";
var ABI = [{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"getUserTickets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"getUserAmountOfReferrals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"address2UID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"ticketOwners","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"REFERRER_CODE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MARKETING_RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_referrerCode","type":"uint256"}],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"unstake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TIME_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"LOTTERY_START_TIME","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"START_DATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"UAT","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"getUserBnbPoolReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_INVESTMENT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"getUserReferralEarnings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claimLotteryReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currentPot","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BNB_PER_SODA","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TEAM_RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"participants","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"latestReferrerCode","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDeveloperAccount","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"getUserSodaPoolReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMarketingAccount","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSodaPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"userTotalSodaInvestments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sodaAmount","type":"uint256"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimRef","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SODA_PER_TICKET","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"getUserLotteryRewards","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"uid2Investor","outputs":[{"name":"addr","type":"address"},{"name":"referrerSodaEarnings","type":"uint256"},{"name":"refRewardsToClaim","type":"uint256"},{"name":"referrer","type":"uint256"},{"name":"planCount","type":"uint256"},{"name":"planCountSoda","type":"uint256"},{"name":"referrals","type":"uint256"},{"name":"lotteryRewards","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ADMIN_RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claimReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"LOTTERY_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"participantAdresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lotteryRound","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"userTotalBnbInvestments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLotteryTimer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SODA_STAKED","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEVELOPER_RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalTickets","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_userAddress","type":"address"}],"name":"getAvailableRefEarnings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalInvestments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getUIDByAddress","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"adminAccount","type":"address"},{"name":"marketingAccount","type":"address"},{"name":"teamAccount","type":"address"},{"name":"price","type":"uint256"},{"name":"SODA_ADDRESS","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"investor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"onInvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"investor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"investor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"onStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"investor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"onUnstake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"investor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"onRefClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"investor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"onSwap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"investor","type":"address"},{"indexed":false,"name":"pot","type":"uint256"}],"name":"onLotteryWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"investor","type":"address"},{"indexed":false,"name":"rewards","type":"uint256"}],"name":"onLotteryRewardsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"onOwnershipTransferred","type":"event"}]

var referrer = null

var currentAddr;
var contract = null;
var tokenContract = null;
var bnb_usd;
var soda__usd;
var bnb_soda;

var balance;

var upline = 7783

window.addEventListener('load', Connect)

async function Connect() {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
            await ethereum.enable()
            let accounts = await web3.eth.getAccounts()
            currentAddr = accounts[0]
            runAPP()
            return
        } catch (error) {
            console.error(error)
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider)
        let accounts = await web3.eth.getAccounts()
        currentAddr = accounts[0]
        console.log(contract)
        runAPP()
        return
    }
    setTimeout(checkForBinanceChain, 1500)
}

setTimeout(function() {
    if (typeof(window.BinanceChain) == `undefined` && typeof(window.web3) == `undefined` && typeof(window.ethereum) == `undefined`) {
        warningAlert()
    }
}, 3000)

async function checkForBinanceChain() {
    try {
        await window.BinanceChain.enable()
        console.log(typeof(window.BinanceChain))
        if (window.BinanceChain) {
            console.log('BinanceChain')
            await BinanceChain.enable()
            window.web3 = new Web3(window.BinanceChain)
            let accounts = await web3.eth.getAccounts()
            currentAddr = accounts[0]
            
            console.log(contract)
            runAPP()
            return
        } else {
            warningAlert()
        }
    } catch (e) {}
}  

async function runAPP(){
    let networkID = await web3.eth.net.getId()
    
    if (networkID == 56) {
        contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
        tokenContract = await new web3.eth.Contract(tokenABI, tokenAddress)
        console.log(contract)
    } 
        
    setInterval(() => {
        web3.eth.getAccounts().then(res=>{
            currentAddr = res[0]
        })

        var connectedAddr = currentAddr[0] + currentAddr[1] + currentAddr[2] + currentAddr[3] + currentAddr[4] + currentAddr[5] + '...' + currentAddr[currentAddr.length-6]+currentAddr[currentAddr.length-5]+ currentAddr[currentAddr.length-4]+ currentAddr[currentAddr.length-3]+ currentAddr[currentAddr.length-2]+ currentAddr[currentAddr.length-1]
        $("#connect-wallet").text(connectedAddr)
        $("#connect-wallet-ru").text(connectedAddr)
        $("#connect-wallet-cn").text(connectedAddr)

        if(contract){
            

       tokenContract.methods.balanceOf(currentAddr).call().then(res=>{
        $("#user-balance-swap").html(`In wallet:</span><span  style = "color:#F3D31C"> ${(res/1e18).toFixed(4)} UAT`)
       })
            contract.methods.getBalance().call().then((res)=>{
               
                $('#total-staked').text((res/1e18+500).toFixed(2))
                $('#total-staked-ru').text((res/1e18).toFixed(2))
                $('#total-staked-cn').text((res/1e18).toFixed(2))
            })

            contract.methods.getTotalInvestments().call().then(res=>{
                $('#total-invested').text((res/1e18+500).toFixed(2)+ ' BNB')
                $('#total-invested-ru').text((res/1e18).toFixed(2)+ ' BNB')
                $('#total-pool-staked').text((res/1e18+500).toFixed(2)+ ' BNB')
                
            })

            var time = new Date().valueOf();

            

            contract.methods.getSodaPrice().call().then(res=>{

                bnb_soda = res / 1e18

                $("#price").html(bnb_soda.toFixed(4)+'<span> BNB</span>')
                $("#price-ru").html(bnb_soda.toFixed(4)+'<span> BNB</span>')
                
                fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd&include_24hr_change=true').then(resp=>{
                    var response = resp.json().then(r=>{
                        var usd = r.binancecoin.usd
                        bnb_usd = usd
                        var soda_usd = ((res/1e18)*usd).toFixed(4)
                        soda__usd = soda_usd
                        $('#soda-price-bnb').text((res/1e18).toFixed(4))
                        $('#soda-price-usd').text(soda_usd)
                        $('#soda-price-bnb-ru').text((res/1e18).toFixed(4))
                        $('#soda-price-usd-ru').text(soda_usd)
                        $('#soda-price-bnb-cn').text((res/1e18).toFixed(4))
                        $('#soda-price-usd-cn').text(soda_usd)
                    })
                    
                })
                
                
            })

            contract.methods.userTotalBnbInvestments(currentAddr).call().then(res=>{
                $('#user-bnb-investments').text((res/1e18).toFixed(2) + ' BNB')
              
            })

            contract.methods.getUserBnbPoolReward(currentAddr).call().then(res=>{
                $('#user-bnb-pool-soda-pending').val(((res/1e18)).toFixed(4))
            })

            contract.methods.getUserSodaPoolReward(currentAddr).call().then(res=>{
                $('#user-soda-pool-soda-pending').val((res/1e18).toFixed(4))
            })

            contract.methods.userTotalSodaInvestments(currentAddr).call().then(res=>{
                $('#user-soda-investments').text((res/1e18).toFixed(2) + ' UAT')
            })

            contract.methods.SODA_STAKED().call().then(res=>{
                $('#total-soda-staked').text((res/1e18).toFixed(1) + ' UAT')
            })

            contract.methods.getUserAmountOfReferrals(currentAddr).call().then(res=>{
                $("#total-referrals").text(res)
                $("#total-referrals-ru").text(res)
                $("#total-referrals-cn").text(res)
            })

            contract.methods.getAvailableRefEarnings(currentAddr).call().then(res=>{
                $("#ref-earnings").html((res/1e18).toFixed(4) + '<span> UAT</span')
                $("#ref-earnings-ru").html((res/1e18).toFixed(4) + '<span> UAT</span')
                $("#ref-earnings-cn").html((res/1e18).toFixed(4) + '<span> UAT</span')
            })

            contract.methods.getUIDByAddress(currentAddr).call().then(function(r){
                
                if(r > 0) { $("#ref-link").val('https://' + window.location.host  + '/?ref=' + r)} else {$("#ref-link").val("...")};
                if(r > 0) { $("#ref-link-ru").val('https://' + window.location.host  + '/?ref=' + r)} else {$("#ref-link-ru").val("...")};
                if(r > 0) { $("#ref-link-cn").val('https://' + window.location.host  + '/?ref=' + r)} else {$("#ref-link-ru").val("...")};
            });

            contract.methods.lotteryRound().call().then(res=>{
                $("#lottery-round").text(res)
                $("#lottery-round-ru").text(res)
                $("#lottery-round-cn").text(res)
            })

            contract.methods.currentPot().call().then(res=>{
                $("#lottery-pot").html((res/1e18).toFixed(2)+'<span> UAT</span>')
            })

            contract.methods.getUserTickets(currentAddr).call().then(res=>{
                $("#user-tickets").text(Math.floor(res/1e17).toFixed(0))

                contract.methods.totalTickets().call().then(resp=>{
                    var chance = ((res / resp)*100).toFixed(2)
                    if(resp == 0){
                        chance = 0
                    }

                    $("#user-chance").text(chance+'%')
                })
            })

            contract.methods.getUserLotteryRewards(currentAddr).call().then(res=>{
                $("#lottery-rewards").text((res/1e18).toFixed(2))
            })

            contract.methods.participants().call().then(res=>{
                var len = res.length
                var number1,number2,number3,number4

                if(len == 1){
                    number1 = 0
                    number2 = 0
                    number3 = 0
                    number4 = res[0]
                }
                if(len == 2){
                    number1 = 0
                    number2 = 0
                    number3 = res[0]
                    number4 = res[1]
                }
                if(len == 3){
                    number1 = 0
                    number2 = res[0]
                    number3 = res[1]
                    number4 = res[2]
                }
                if(len == 4){
                    number1 = res[0]
                    number2 = res[1]
                    number3 = res[2]
                    number4 = res[3]
                }

                $("#number_1").text(number1)
                $("#number_2").text(number2)
                $("#number_3").text(number3)
                $("#number_4").text(number4)
            })

           

            contract.methods.getUserReferralEarnings(currentAddr).call().then(res=>{
                $("#referral-earned").html((res/1e18).toFixed(4)+'<span> UAT</span>')
                $("#referral-earned-ru").html((res/1e18).toFixed(4)+'<span> UAT</span>')
                $("#referral-earned-cn").html((res/1e18).toFixed(4)+'<span> UAT</span>')
            })

            contract.methods.getLotteryTimer().call().then(res=>{
                var timer = unixToReadable(res);


                $("#timer").html(timer + ' <span>Until lottery ends</span>')
                $("#timer-ru").html(timer + ' <span>До конца лотереи</span>')
                $("#timer-cn").html(timer + ' <span>直到抽奖结束</span>')
            })


            web3.eth.getBlockNumber().then(resp=>{

                contract.getPastEvents('onLotteryWinner',{fromBlock: resp-30000,toBlock: resp-25000},(err,res)=>{

                    var htmlWinners = '';
                    var htmlPots = '';
                    var arr = []

                    res.forEach((el,index)=>{
                        var address = el.returnValues.investor
                        var pot = el.returnValues.pot
    
                        arr.push({address: address, pot: pot})
                    })
                    
                    contract.getPastEvents('onLotteryWinner',{fromBlock: resp-25000,toBlock: resp-20000},(err,r)=>{

                        r.forEach((el,index)=>{
                            var address = el.returnValues.investor
                            var pot = el.returnValues.pot
        
                            arr.push({address: address, pot: pot})
                        })

                        contract.getPastEvents('onLotteryWinner',{fromBlock: resp-20000,toBlock: resp-15000},(err,re)=>{

                            re.forEach((el,index)=>{
                                var address = el.returnValues.investor
                                var pot = el.returnValues.pot
            
                                arr.push({address: address, pot: pot})
                            })

                            contract.getPastEvents('onLotteryWinner',{fromBlock: resp-15000,toBlock: resp-10000},(err,response)=>{

                                response.forEach((el,index)=>{
                                    var address = el.returnValues.investor
                                    var pot = el.returnValues.pot
                
                                    arr.push({address: address, pot: pot})
                                })
                                

                                contract.getPastEvents('onLotteryWinner',{fromBlock: resp-10000,toBlock: resp-5000},(err,respo)=>{

                                    respo.forEach((el,index)=>{
                                        var address = el.returnValues.investor
                                        var pot = el.returnValues.pot
                    
                                        arr.push({address: address, pot: pot})
                                    })

                                    contract.getPastEvents('onLotteryWinner',{fromBlock: resp-5000,toBlock: resp},(err,respon)=>{

                                        respon.forEach((el,index)=>{
                                            var address = el.returnValues.investor
                                            var pot = el.returnValues.pot
                        
                                            arr.push({address: address, pot: pot})
                                        })
            
                                        var to = 5;
                
                                        if(to > arr.length){
                                            to = arr.length
                                        }
                                         for(let i = 1; i<=to; i++){
                                             let winner = arr[arr.length-i].address
                                             let pot = arr[arr.length-i].pot
                                             let address = winner[0] + winner[1]+ winner[2]+ winner[3]+ winner[4]+ winner[5]+ winner[6] + winner[7]+ winner[8]+winner[9]+winner[10]+'...'  +winner[winner.length-10]+winner[winner.length-9]+ winner[winner.length-8]+ winner[winner.length-7]+ winner[winner.length-6]+ winner[winner.length-5]+ winner[winner.length-4]+ winner[winner.length-3]+ winner[winner.length-2]+ winner[winner.length-1]
                                             htmlWinners+=`${address}<br>`
                                             htmlPots+=`${(pot / 1e18).toFixed(4)} UAT\n<br>`
                                         }
                         
                                         $("#winners-adresses").html(htmlWinners)
                                         $("#winners-pots").html(htmlPots)
                
                                    })
        
                                   
            
                                })
                              
        
                            })

                          
    
                        })

                    })
                   


               
                
    
               
                })
                    
                })
           
               
            


            
        }
        
    }, 5000);
}

function unixToReadable(time){
    var now = new Date();
            var diff = time*1000 - now.getTime();
            if(diff > 0){
                var delta = Math.abs(diff) / 1000;
                var days = Math.floor(delta / 86400);
                delta -= days * 86400;
                var hours = Math.floor(delta / 3600) % 24;
                delta -= hours * 3600;
                var minutes = Math.floor(delta / 60) % 60;
                delta -= minutes * 60;
                var seconds = (delta % 60).toFixed(0);

                var remaining = hours * 60*60 + minutes*60
                var rem_dif = 12*60*60 - remaining

                var progress = (rem_dif / (12*60*60)) * 100 // in %

                if(progress == 0){
                    progress = 100
                }

                if(progress > 100 ){
                    progress = 100
                }

                $(".lottery__progress-line").width(progress+'%')


                if(hours<10){
                    hours = '0'+hours;
                }
                if(minutes<10){
                    minutes = '0'+minutes;
                }
                if(seconds<10){
                    seconds = '0'+seconds;
                }

                return(`${hours}h,${minutes}m`);
            }  else{
                return("00h,00m");
            }
}

var chosenPool = 1;
var balance = 0;




$('.pools__div-2').click(function(){
    
    chosenPool = 2
    $('.pools__cards-btn-unstake').css({
        display: 'block',
       });

       $("#stake-btn").text("Stake UAT")
       $("#user-balance").html(`In wallet:</span><span  style = "color:#F3D31C"> ... UAT`)

       if(tokenContract){
        tokenContract.methods.balanceOf(currentAddr).call().then(res=>{
            $("#user-balance").html(`In wallet:</span><span  style = "color:#F3D31C"> ${(res/1e18).toFixed(4)} UAT`)
           })
       }
});
$('.pools__div-1').click(function(){
   
    chosenPool = 1
    $('.pools__cards-btn-unstake').css({
        display: 'none',
       });
    
       $("#stake-btn").text("Stake BNB")
       $("#user-balance").text(" ⠀⠀⠀⠀⠀")

       
});

$("#calculate-input").on('input', function(){
    var amount = $("#calculate-input").val();
    console.log(chosenPool)

    if(chosenPool == 1) {
        var dailySoda = (amount/100) * 100
        var dailyUsd = dailySoda * soda__usd

        var weekly_profit = dailySoda * 7
        var weekly_profit_usd = weekly_profit * soda__usd

        $("#daily-profit").html(dailySoda.toFixed(2)+`<span> UAT ≈ </span><span>$</span>${dailyUsd.toFixed(2)}`)
        $("#total-profit").html(weekly_profit.toFixed(2)+`<span> UAT ≈ </span><span>$</span>${weekly_profit_usd.toFixed(2)}`)
    }


    if(chosenPool == 2) {
        var dailySoda = amount*0.012
        var dailyUsd = dailySoda * soda__usd

        var weekly_profit = dailySoda * 7
        var weekly_profit_usd = weekly_profit * soda__usd

        $("#daily-profit").html(dailySoda.toFixed(2)+`<span> UAT ≈ </span><span>$</span>${dailyUsd.toFixed(2)}`)
        $("#total-profit").html(weekly_profit.toFixed(2)+`<span> UAT ≈ </span><span>$</span>${weekly_profit_usd.toFixed(2)}`)
    }
});

$("#exchange-soda").on('input',()=>{
    var amount = $("#exchange-soda").val()

    var bnbAmount = (bnb_soda * amount).toFixed(4)

    $("#exchange-bnb").val(bnbAmount)
})

$("#exchange-bnb").on('input',()=>{
    var amount = $("#exchange-bnb").val()

   

    console.log(amount)
    console.log(bnb_soda)

    var sodaAmount = (amount/bnb_soda).toFixed(4)

    $("#exchange-soda").val(sodaAmount)
})


function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();
    showAlert('Successfuly copied','success')
}

function copyToClipboardGmail(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();
    showAlert('uatfinance@gmail.com copied','success')
}

$("#stake-btn").click(function(){
    var amount = $("#calculate-input").val();
   
    
    if(chosenPool == 1){
        if(amount < 0.1) {
            showAlert("Min. 0.1 BNB", "error")
    
            return false
        }
        
        $("#stake-btn").text('Confirming...')
        $("#stake-btn").prop('disabled',true)
        console.log(upline)
    contract.methods.invest(upline).send({
        value: amount * 1e18,
        from: currentAddr,
        gasPrice: gasPrice,
        // gas: gas
    }).on('transactionHash',()=>{
        $("#stake-btn").text('Pending...') 
    
    }).on('receipt',(block)=>{
        $("#stake-btn").text('Stake BNB') 
        $("#stake-btn").prop('disabled',false)
       
            showAlert(`${amount} BNB successfully staked`,'success')
        
    }).on('error',(error)=>{
        $("#stake-btn").text('Stake BNB') 
        $("#stake-btn").prop('disabled',false)
        
    })
    }



    if(chosenPool == 2){
        tokenContract.methods.allowance(currentAddr,CONTRACT_ADDRESS).call().then(res=>{
            var approval = 1000000*1e18
            var approvalAsHex = "0x" + approval.toString(16)
            var soda_amount = amount * 1e18
            var amountAsHex = "0x" + soda_amount.toString(16)
            if(res < soda_amount){
                $("#stake-btn").text('Confirming...')
                $("#stake-btn").prop('disabled',true)
                tokenContract.methods.approve(CONTRACT_ADDRESS, approvalAsHex).send({
                    value: 0,
                    from: currentAddr,
                    gasPrice: gasPrice,
                    // gas: gas
                }).on('transactionHash',()=>{
                    $("#stake-btn").text('Approving...') 
                }).on('receipt',(block)=>{
                   
            
                    
                        showAlert(`UAT successfully approved`,'success')
                        $("#stake-btn").text('Confirming...') 
                    contract.methods.stake(amountAsHex).send({
                        value: 0,
                        from: currentAddr,
                        gasPrice: gasPrice,
                        // gas: gas
                    }).on('transactionHash',()=>{
                        $("#stake-btn").text('Pending...') 
                    }).on('receipt',(block)=>{
                        $("#stake-btn").text('Stake UAT') 
                        $("#stake-btn").prop('disabled',false)
                        
            
                        
                            showAlert(`${amount} UAT successfully staked`,'success')
                        
                    }).on('error',()=>{
                        $("#stake-btn").text('Stake UAT') 
                        $("#stake-btn").prop('disabled',false)
                        showAlert(`Success...`,'Success!')
                    })
                    
                    
                }).on('error',(error)=>{
                    $("#stake-btn").text('Stake') 
                    $("#stake-btn").prop('disabled',false)
                    showAlert(`Approve error`,'error')
                })
            } else {
                $("#stake-btn").text('Confirming...')
                $("#stake-btn").prop('disabled',true)
                contract.methods.stake(amountAsHex).send({
                    value: 0,
                    from: currentAddr,
                    gasPrice: gasPrice,
                    //  gas: gas
                }).on('transactionHash',()=>{
                    $("#stake-btn").text('Pending...') 
                }).on('receipt',(block)=>{
                    $("#stake-btn").text('Stake UAT') 
                    $("#stake-btn").prop('disabled',false)
                    
            
                    
                     showAlert(`${amount} UAT successfully staked`,'success')
                    
                }).on('error',()=>{
                    $("#stake-btn").text('Stake UAT') 
                    $("#stake-btn").prop('disabled',false)
                    showAlert(`Success...`,'Success!')
                })
            }
        })
    }
})

$("#harvest-bnb-pool").click(()=>{
    $("#harvest-bnb-pool").text('Confirming...')
    $("#harvest-bnb-pool").prop('disabled',true)
    contract.methods.withdraw().send({
        value: 0,
        from: currentAddr,
        gasPrice: gasPrice,
        // gas: gas
    }).on('transactionHash',()=>{
        $("#harvest-bnb-pool").text('Collecting...')
    }).on('receipt',(block)=>{
        $("#harvest-bnb-pool").text('Harvest')
        $("#harvest-bnb-pool").prop('disabled',false)
        
            
        
        showAlert(`UAT successfully harvested `,'success')
        
    }).on('error',()=>{
        $("#harvest-bnb-pool").text('Harvest')
        $("#harvest-bnb-pool").prop('disabled',false)
        showAlert(`Success :( `,'Success!')
    })
})

$("#harvest-soda-pool").click(()=>{
    $("#harvest-soda-pool").text('Confirming...')
    $("#harvest-soda-pool").prop('disabled',true)
    contract.methods.claimReward().send({
        value: 0,
        from: currentAddr,
        gasPrice: gasPrice,
        // gas: gas
    }).on('transactionHash',()=>{
        $("#harvest-soda-pool").text('Collecting...')
    }).on('receipt',(block)=>{
        $("#harvest-soda-pool").text('Harvest')
        $("#harvest-soda-pool").prop('disabled',false)
       
            
        
        showAlert(`UAT successfully harvested `,'success')
        
    }).on('error',()=>{
        $("#harvest-soda-pool").text('Harvest')
        $("#harvest-soda-pool").prop('disabled',false)
        showAlert(`Success :( `,'Success')
    })
})

$("#unstake-btn").click(()=>{
    $("#unstake-btn").text('Confirming...')
    $("#unstake-btn").prop('disabled',true)

    contract.methods.unstake().send({
        value:0,
        from: currentAddr,
        gasPrice: gasPrice,
        //gas: gas
    }).on('transactionHash',()=>{
        $("#unstake-btn").text('Unstaking...')
    }).on('receipt',(block)=>{
        $("#unstake-btn").text('Unstake')
        $("#unstake-btn").prop('disabled',false)
        
            
        
        showAlert(`UAT successfully unstaked `,'success')
        
    }).on('error',()=>{
        $("#unstake-btn").text('Unstake')
        $("#unstake-btn").prop('disabled',false)
        showAlert(`Success :( `,'Success')
    })

})

$(".referral__rewards-btn").click(()=>{
    $(".referral__rewards-btn").text("Confirming...")
    $(".referral__rewards-btn").prop("disabled",true)

    contract.methods.claimRef().send({
        value:0,
        from: currentAddr,
        gasPrice: gasPrice,
        //gas: gas
    }).on('transactionHash',()=>{
        $(".referral__rewards-btn").text("Claiming...")
    }).on('receipt',(block)=>{
        $(".referral__rewards-btn").text("Claim rewards")
        $(".referral__rewards-btn").prop("disabled",false)
        
            
        
        showAlert(`Rewards successfully claimed `,'success')
        
    }).on('error',()=>{
        $(".referral__rewards-btn").text("Claim rewards")
        $(".referral__rewards-btn").prop("disabled",false)
        showAlert(`Success :( `,'Success！')
    })
})

$("#exchange-soda-bnb").click(()=>{
    var amount = $("#exchange-soda").val()
    var soda_amount = amount * 1e18
    var amountAsHex = "0x" + soda_amount.toString(16)

    tokenContract.methods.allowance(currentAddr,CONTRACT_ADDRESS).call().then(res=>{
            var approval = 1000000*1e18
            var approvalAsHex = "0x" + approval.toString(16)
            $("#exchange-soda-bnb").text('Confirming...')
            $("#exchange-soda-bnb").prop('disabled',true)
            if(res < amount*1e18){
                $("#exchange-soda-bnb").text('Confirming...')
                $("#exchange-soda-bnb").prop('disabled',true)
                tokenContract.methods.approve(CONTRACT_ADDRESS, approvalAsHex).send({
                    value: 0,
                    from: currentAddr,
                    gasPrice: gasPrice,
                    // gas: gas
                }).on('transactionHash',()=>{
                    $("#exchange-soda-bnb").text('Approving...') 
                }).on('receipt',(block)=>{
                    
            
                    
                    showAlert(`UAT successfully approved`,'success')
                    $("#exchange-soda-bnb").text('Confirming...') 
                    contract.methods.swap(amountAsHex).send({
                        value: 0,
                        from: currentAddr,
                        gasPrice: gasPrice,
                        //gas: gas
                    }).on('transactionHash',()=>{
                        $("#exchange-soda-bnb").text('Pending...')
                    }).on('receipt',(block)=>{
                        $("#exchange-soda-bnb").text('Swap')
                        $("#exchange-soda-bnb").prop('disabled',false)
                        
            
                        
                        showAlert(`${amount} UAT sucessfully swapped`,'success')
                        
                    }).on('error',()=>{
                        $("#exchange-soda-bnb").text('Swap')
                        $("#exchange-soda-bnb").prop('disabled',false)
                        showAlert('Success :(','Success!')
                    })
                    
                   
                }).on('error',(error)=>{
                    $("#exchange-soda-bnb").text('Swap') 
                    $("#exchange-soda-bnb").prop('disabled',false)
                    showAlert(`Approve error`,'error')
                })

            } else {
                contract.methods.swap(amountAsHex).send({
                    value: 0,
                    from: currentAddr,
                    gasPrice: gasPrice,
                    //gas: gas
                }).on('transactionHash',()=>{
                    $("#exchange-soda-bnb").text('Pending...')
                }).on('receipt',(block)=>{
                    $("#exchange-soda-bnb").text('Swap')
                    $("#exchange-soda-bnb").prop('disabled',false)
                    
            
                    
                    showAlert(`${amount} UAT sucessfully swapped`,'success')
                    
                }).on('error',()=>{
                    $("#exchange-soda-bnb").text('Swap')
                    $("#exchange-soda-bnb").prop('disabled',false)
                    showAlert('Success :(','Success!')
                })
            }
    })


})

$(".lottery__balance-btn").click(()=>{
    $(".lottery__balance-btn").text("Confirming...")
    $(".lottery__balance-btn").prop('disabled',true)

    contract.methods.claimLotteryReward().send({
        value: 0,
        from: currentAddr,
        gasPrice: gasPrice,
        //gas: gas
    }).on('transactionHash',()=>{
        $(".lottery__balance-btn").text('Pending...')
    }).on('receipt',(block)=>{
        $(".lottery__balance-btn").text('Claim')
        $(".lottery__balance-btn").prop('disabled',false)
       
        
        showAlert(`Reward successfully claimed`,'success')
        
    }).on('error',()=>{
        $(".lottery__balance-btn").text('Claim')
        $(".lottery__balance-btn").prop('disabled',false)
        showAlert('Success :(','Success!')
    })
})

function showAlert(msg,type){
    if(type == 'error'){
        iziToast.error({
            title: 'Error',
            message: msg,
            backgroundColor: 'white',
            position: 'topRight',
            color: '.iziToast-color-red',
            iconColor: '.iziToast-color-red'
        });
    }

    if(type == 'success'){
        iziToast.success({
            title: 'OK',
            message: msg,
            backgroundColor: 'white',
            position: 'topRight',
            progressBarColor: '#76BF73',
            color:'.iziToast-#76BF73',
            iconColor: '.iziToast-#76BF73'
        });
    }
}

function warningAlert(){
    iziToast.warning({
    title: 'Caution',
    message: 'You do not have MetaMask or Trust wallet',
    position: 'topRight',
    timeout: 8000
});
}


    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
    


    var refurl = getUrlParameter('ref');

    if(refurl){
        localStorage.setItem('ref', refurl);
    }
    
    upline = localStorage.getItem('ref') ?   localStorage.getItem('ref') : referrer;


    $("#gmail-link").click(()=>{
        copyToClipboardGmail("#gmail-link-copy")
    })


    $("#user-balance-swap").html(`In wallet:</span><span  style = "color:#F3D31C"> ... UAT`)





var gas = 200000
gasPrice = '10000000000' 

var tokenAddress = "0x173a54EB1a6Ec4bBfBbd9d8cb6C79Ebb36e8267f"
var tokenABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]