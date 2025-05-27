import { MainTemplate } from "../../template/MainTemplate";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>The Pomodoro Technique 🍅</Heading>

          <p>
            The Pomodoro Technique is a productivity methodology created by{" "}
            <strong>Francesco Cirillo</strong>, which consists of dividing the
            work into blocks of time (the famous "Pomodoros") interspersed with
            breaks. The goal is to maintain total focus for a short period and
            ensure breaks to avoid mental fatigue.
          </p>

          <img src="https://placehold.co/1920x1080" alt="" />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Define a task</strong> that you want to accomplish.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break</strong>.
            </li>
            <li>
              <strong>4. After every 4 cycles, take a long break</strong>{" "}
              (usually 15 to 30 minutes).
            </li>
          </ul>

          <h2>
            But in <strong>Chronos Pomodoro</strong> there is a difference 🚀
          </h2>

          <p>
            Our app follows the original concept, but with some improvements and
            customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Time customization</h3>
          <p>
            You can set the focus, short rest and long rest time the way you
            want! Just go to the <a href="/settings">settings page</a> and
            adjust the minutes as you prefer.
          </p>

          <h3>🔁 Cycles organized in sequence</h3>
          <p>
            With each completed cycle, a new task is automatically added to your
            history, and the app already suggests the next cycle (focus or
            rest).
          </p>
          <p>
            <strong>Our default:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd</strong> cycles: Work (focus).
            </li>
            <li>
              <strong>Even</strong> cycles: Short rest.{" "}
            </li>
            <li>
              Cycle <strong>8</strong>: Special long rest, to reset the complete
              cycle.
            </li>
          </ul>

          <h3>🍅 Cycle view</h3>
          <p>
            Just below the timer, you will see colored dots representing the
            cycles:
          </p>
          <ul>
            <li>🟡 Yellow: Work cycle (focus).</li>
            <li>🟢 Green: Short rest.</li>
            <li>🔵 Blue: Long rest (appears every 8 cycles).</li>
          </ul>

          <p>
            This way, you always know where you are in the process and what
            comes next. You no longer need to write things down on paper or
            calculate them in your head!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your completed tasks and cycles are saved in the{" "}
            <a href="/history">history</a>, with the status of completed or
            interrupted. This way, you can track your progress over time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Organize your focus clearly.</li>
            <li>✅ Work and rest in the right measure.</li>
            <li>✅ Customize your own cycles and times.</li>
            <li>✅ Track your history automatically.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let's go{" "}
            <a href="/">back to the home page</a> and start your Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Total focus, no rush, no pause, just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
