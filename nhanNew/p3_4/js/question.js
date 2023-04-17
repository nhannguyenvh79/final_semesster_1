const $cards = document.querySelectorAll('.question-card')

$cards.forEach(($card) => {
    $card.onclick = () => {
        if (!$card.dataset.clicked) {
            $cards.forEach( ($card) => {$card.classList.remove('showed')
                $card.removeAttribute ('data-clicked')
            })
            $card.setAttribute('data-clicked', 'true');
            $card.classList.add('showed')
        } else {
            $card.classList.remove('showed')
            $card.removeAttribute ('data-clicked')
        } 
    }
})
