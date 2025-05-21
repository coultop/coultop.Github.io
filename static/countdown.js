let CountdownTimer=(()=>{let o={targetDate:"2026-02-17",targetName:"春节",units:{day:{text:"今日",unit:"小时"},week:{text:"本周",unit:"天"},month:{text:"本月",unit:"天"},year:{text:"本年",unit:"天"}}},c={day:()=>{var e=(new Date).getHours();return{remaining:24-e,percentage:e/24*100}},week:()=>{var e=(new Date).getDay(),e=0===e?6:e-1;return{remaining:6-e,percentage:(1+e)/7*100}},month:()=>{var e=new Date,t=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),e=e.getDate()-1;return{remaining:t-e,percentage:e/t*100}},year:()=>{var e=new Date,t=new Date(e.getFullYear(),0,1),n=365+(e.getFullYear()%4==0?1:0),e=Math.floor((e-t)/864e5);return{remaining:n-e,percentage:e/n*100}}};function t(){var e,t,n,a,r,i=["eventName","eventDate","daysUntil","countRight"].map(e=>document.getElementById(e));i.some(e=>!e)||([i,e,t,n]=i,a=new Date,r=new Date(o.targetDate),i.textContent=o.targetName,e.textContent=o.targetDate,t.textContent=Math.round((r-a.setHours(0,0,0,0))/864e5),n.innerHTML=Object.entries(o.units).map(([e,{text:t,unit:n}])=>{var{remaining:e,percentage:a}=c[e]();return`
                    <div class="cd-count-item">
                        <div class="cd-item-name">${t}</div>
                        <div class="cd-item-progress">
                            <div class="cd-progress-bar" style="width: ${a}%; opacity: ${a/100}"></div>
                            <span class="cd-percentage ${46<=a?"cd-many":""}">${a.toFixed(2)}%</span>
                            <span class="cd-remaining ${60<=a?"cd-many":""}">
                                <span class="cd-tip">还剩</span>${e}<span class="cd-tip">${n}</span>
                            </span>
                        </div>
                    </div>
                `}).join(""))}let n,a=()=>{var e;(e=document.createElement("style")).textContent=`
            .card-countdown .item-content {
                display: flex;
            }
            .cd-count-left {
                position: relative;
                display: flex;
                flex-direction: column;
                margin-right: 0.8rem;
                line-height: 1.5;
                align-items: center;
                justify-content: center;
            }
            .cd-count-left .cd-text {
                font-size: 14px;
            }
            .cd-count-left .cd-name {
                font-weight: bold;
                font-size: 18px;
            }
            .cd-count-left .cd-time {
                font-size: 30px;
                font-weight: bold;
                color: var(--anzhiyu-main);
            }
            .cd-count-left .cd-date {
                font-size: 12px;
                opacity: 0.6;
            }
            .cd-count-left::after {
                content: "";
                position: absolute;
                right: -0.8rem;
                width: 2px;
                height: 80%;
                background-color: var(--anzhiyu-main);
                opacity: 0.5;
            }
            .cd-count-right {
                flex: 1;
                margin-left: .8rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .cd-count-item {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 24px;
            }
            .cd-item-name {
                font-size: 14px;
                margin-right: 0.8rem;
                white-space: nowrap;
            }
            .cd-item-progress {
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                height: 100%;
                width: 100%;
                border-radius: 8px;
                background-color: var(--anzhiyu-background);
                overflow: hidden;
            }
            .cd-progress-bar {
                height: 100%;
                border-radius: 8px;
                background-color: var(--anzhiyu-main);
            }
            .cd-percentage,
            .cd-remaining {
                position: absolute;
                font-size: 12px;
                margin: 0 6px;
                transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            }
            .cd-many {
                color: #fff;
            }
            .cd-remaining {
                opacity: 0;
                transform: translateX(10px);
            }
            .card-countdown .item-content:hover .cd-remaining {
                transform: translateX(0);
                opacity: 1;
            }
            .card-countdown .item-content:hover .cd-percentage {
                transform: translateX(-10px);
                opacity: 0;
            }
        `,document.head.appendChild(e),t(),n=setInterval(t,6e5)};return["pjax:complete","DOMContentLoaded"].forEach(e=>document.addEventListener(e,a)),document.addEventListener("pjax:send",()=>n&&clearInterval(n)),{start:a,stop:()=>n&&clearInterval(n)}})();