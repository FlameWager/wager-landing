<script setup>
import Button from "@/components/ui/Button.vue";
import { links } from "@/config";
</script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.base">
      <div :class="$style.content">
        <div :class="$style.logo">
          <Icon name="logo_symbol" size="32" />
        </div>
      </div>

      <div :class="$style.bottom">
        <div :class="$style.block">
          <div :class="$style.left"></div>

          <div :class="$style.right">
            <Button
              type="secondary"
              size="small"
              :link="links.twitter"
              :class="$style.footer_btn"
            >
              X
              <Icon name="arrowrighttop" size="16" color="tertiary" />
            </Button>
          </div>
        </div>
      </div>

      <Flex justify="between" :class="$style.copyrights">
        <Flex align="center" wrap="wrap" :class="$style.line">
          <Text size="14" weight="500" color="tertiary">
            © {{ new Date().getFullYear() }}&nbsp;&nbsp;
          </Text>
          <Text size="11" color="support">✦</Text>
          <Text size="14" weight="500" color="secondary">
            &nbsp;&nbsp;Wager&nbsp;
          </Text>
        </Flex>
      </Flex>
    </div>
  </div>
</template>

<style module>
.wrapper {
  width: 100%;

  display: flex;
  justify-content: center;

  border-top: 1px solid var(--border);
}

.base {
  width: 100%;
  max-width: 1250px;
  margin: 0 32px;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;

  fill: var(--text-support);
}

.columns {
  display: flex;
  flex-wrap: wrap;
  gap: 150px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.link {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-tertiary);

  transition: color 0.2s ease;
}

.link:hover {
  color: var(--text-primary);
}

.link:focus {
  box-shadow: 0 0 0 transparent;
  color: var(--text-primary);
}

.bottom {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left,
.right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer_btn {
  color: var(--text-secondary);
}

.footer_btn.green svg {
  fill: var(--green);
}

.footer_btn.yellow svg {
  fill: var(--yellow);
}

.footer_btn.red svg {
  fill: var(--red);
}

@media (max-width: 900px) {
  /* .content {
    flex-direction: column;
    align-items: center;
  } */

  /* .block {
    flex-direction: column;
    gap: 24px;
  } */

  .copyrights {
    flex-wrap: wrap;
    justify-content: center;

    gap: 24px;
  }

  .line {
    align-items: center;
    justify-content: center;
  }

  .line * {
    text-align: center;
    line-height: 1.6;
  }
}

@media (max-width: 700px) {
  .columns {
    gap: 50px;
    flex-direction: column;
  }

  .column {
    align-items: center;
  }

  .base {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}
</style>
