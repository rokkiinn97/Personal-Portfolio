(() => {
  const hero = document.querySelector('.hero');
  const title = document.querySelectorAll('h1 span');
  const nodes = document.querySelectorAll('.node');

  if (hero && window.matchMedia('(pointer:fine)').matches) {
    hero.addEventListener('pointermove', (event) => {
      const r = hero.getBoundingClientRect();
      const x = (event.clientX - r.left) / r.width - 0.5;
      const y = (event.clientY - r.top) / r.height - 0.5;
      title.forEach((el, i) => {
        const depth = (i + 1) * 3;
        el.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    }, { passive: true });

    hero.addEventListener('pointerleave', () => {
      title.forEach(el => el.style.transform = 'translate(0,0)');
    });
  }

  // A small interaction that reinforces the idea of a connected search system.
  nodes.forEach((node, index) => {
    node.addEventListener('mouseenter', () => {
      nodes.forEach((other, otherIndex) => {
        const distance = Math.abs(index - otherIndex);
        other.style.opacity = distance <= 1 ? '1' : '.35';
      });
    });
    node.addEventListener('mouseleave', () => {
      nodes.forEach(other => other.style.opacity = '1');
    });
  });
})();


// Section 02: move the signal field slightly with the pointer so the system feels responsive, not decorative.
(() => {
  const section = document.querySelector('.system-section');
  if (!section || !window.matchMedia('(pointer:fine)').matches) return;
  const clusters = section.querySelectorAll('.signal-cluster');
  section.addEventListener('pointermove', (event) => {
    const r = section.getBoundingClientRect();
    const x = (event.clientX - r.left) / r.width - 0.5;
    const y = (event.clientY - r.top) / r.height - 0.5;
    clusters.forEach((cluster, i) => {
      const depth = i === 0 ? 7 : -5;
      const rotate = i === 0 ? -4 : 3;
      cluster.style.transform = `translate(${x * depth}px, ${y * depth}px) rotate(${rotate + x * 1.5}deg)`;
    });
  }, { passive: true });
  section.addEventListener('pointerleave', () => {
    clusters[0].style.transform = 'rotate(-4deg)';
    clusters[1].style.transform = 'rotate(3deg)';
  });
})();




// Section 04 — Compact expertise index
(() => {
  const rows = document.querySelectorAll('.stack-row');
  if (!rows.length) return;
  rows.forEach(row => {
    row.addEventListener('click', () => {
      rows.forEach(item => item.classList.remove('is-active'));
      row.classList.add('is-active');
    });
  });
})();


// Section 05: the timeline line follows the experience being inspected.
(() => {
  const timeline = document.querySelector('.career-timeline');
  const line = timeline?.querySelector('.career-line');
  const steps = [...document.querySelectorAll('.career-step')];
  if (!timeline || !line || !steps.length) return;
  const setProgress = (index) => {
    const step = steps[index];
    if (!step) return;
    const marker = step.querySelector('.career-marker');
    const tr = timeline.getBoundingClientRect();
    const mr = marker.getBoundingClientRect();
    const progress = ((mr.left + mr.width / 2 - tr.left) / tr.width) * 100;
    timeline.style.setProperty('--career-progress', `${Math.max(0, Math.min(100, progress))}%`);
    timeline.style.setProperty('--career-dot', '1');
    steps.forEach((item, i) => {
      item.classList.toggle('is-hovered', i === index);
      item.classList.toggle('is-dimmed', i !== index);
    });
  };
  const clear = () => {
    timeline.style.setProperty('--career-progress', '0%');
    timeline.style.setProperty('--career-dot', '0');
    steps.forEach(item => item.classList.remove('is-hovered','is-dimmed'));
  };
  steps.forEach((step, index) => {
    step.addEventListener('mouseenter', () => setProgress(index));
    step.addEventListener('mouseleave', clear);
    step.addEventListener('focusin', () => setProgress(index));
    step.addEventListener('focusout', clear);
  });
  window.addEventListener('resize', () => {
    const hovered = steps.findIndex(s => s.matches(':hover'));
    if (hovered >= 0) setProgress(hovered);
  }, { passive: true });
})();
