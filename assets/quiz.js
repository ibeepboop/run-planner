/* Reusable retrieval-practice quiz widget for Run Planner lessons.
 *
 * Markup contract:
 *
 *   <div class="quiz" data-answer="1" data-explain="Why that answer is right.">
 *     <p class="quiz-q">The question?</p>
 *     <button class="quiz-choice">First option</button>
 *     <button class="quiz-choice">Second option</button>
 *     <button class="quiz-choice">Third option</button>
 *     <p class="quiz-feedback"></p>
 *   </div>
 *
 * data-answer is the zero-based index of the correct .quiz-choice.
 * Feedback is immediate: the goal is a tight loop, not a graded test.
 */
(function () {
  function initQuiz(quiz) {
    var choices = Array.prototype.slice.call(
      quiz.querySelectorAll('.quiz-choice')
    );
    var feedback = quiz.querySelector('.quiz-feedback');
    var answer = parseInt(quiz.getAttribute('data-answer'), 10);
    var explain = quiz.getAttribute('data-explain') || '';

    choices.forEach(function (choice, index) {
      choice.addEventListener('click', function () {
        if (quiz.dataset.answered === 'true') return;
        quiz.dataset.answered = 'true';

        choices.forEach(function (other, otherIndex) {
          other.disabled = true;
          if (otherIndex === answer) other.classList.add('correct');
        });

        if (index === answer) {
          if (feedback) feedback.textContent = 'Correct. ' + explain;
        } else {
          choice.classList.add('incorrect');
          if (feedback) feedback.textContent = 'Not quite. ' + explain;
        }
      });
    });
  }

  function initAll() {
    Array.prototype.slice
      .call(document.querySelectorAll('.quiz'))
      .forEach(initQuiz);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
